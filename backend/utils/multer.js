const multer = require("multer");

// Multer config: store file in memory
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Only PDF allowed"), false);
};

exports.upload = multer({ storage, fileFilter });
