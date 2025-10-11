const ResumeModel = require("../Models/resume");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const path = require("path");
const { CohereClient } = require("cohere-ai");
require("dotenv").config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;
    // console.log(req.file);
    // const pdfBuffer = req.file.buffer || null;
    // const pdfPath = req.file.path;
    // const fs = require("fs");
    // const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdfParse(req.file.buffer);

    const prompt = `
            You are a resume screening assistant.
            Assess the resume against the job description, giving a match score (0-100) and concise, professional feedback.


            Resume:
            ${pdfData.text}

            Job Description:
            ${job_desc}

            Return the score and a brief explanation in this format:
            Score: XX
            Reason: ...

            `;
    const chatResponse = await cohere.chat({
      model: "command-xlarge-nightly",
      message: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const result = chatResponse.text;
    // console.log(result);
    let match = result.match(/Score:\s*(\d+)/);
    let score = match ? parseInt(match[1], 10) : null;

    const reasonMatch = result.match(/Reason:\s*([\s\S]*)/);
    const reason = reasonMatch ? reasonMatch[1].trim() : null;

    const newResume = new ResumeModel({
      user,
      resume_name: req.file.originalname,
      job_desc,
      score,
      feedback: reason,
    });

    await newResume.save();

    // fs.unlinkSync(pdfPath); // remove temp file

    res
      .status(200)
      .json({ message: "Your analysis are ready", data: newResume });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

exports.getAllResumesForUser = async (req, res) => {
  try {
    {
      const { user } = req.params;
      let resumes = await ResumeModel.find({ user: user }).sort({
        createdAt: -1,
      });
      return res
        .status(200)
        .json({ message: "Your Previous History", resumes: resumes });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server error", message: err.message });
  }
};

exports.getResumeForAdmin = async (req, res) => {
  try {
    {
      let resumes = await ResumeModel.find({})
        .sort({ createdAt: -1 })
        .populate("user");
      return res
        .status(200)
        .json({ message: "Fetched All History", resumes: resumes });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Server error", message: err.message });
  }
};
