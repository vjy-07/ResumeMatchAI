const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
require("dotenv").config();

require("./conn");
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://resumematchai-9qpb.onrender.com",
    ],
  }),
);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "ResumeMatchAI Backend",
  });
});

const UserRoutes = require("./Routes/user");
const ResumeRoutes = require("./Routes/resume");

app.use("/api/user", UserRoutes);
app.use("/api/resume", ResumeRoutes);

app.listen(PORT, () => {
  console.log("backend is running on port", PORT);
});
