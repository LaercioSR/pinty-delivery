const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// Define upload destination path
const uploadDir = path.resolve(
  __dirname,
  "..",
  "..",
  "public",
  "uploads",
  "establishment_images"
);

// Configure multer storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniquePrefix = crypto.randomBytes(6).toString("hex");
    const sanitizedOriginalName = file.originalname.replace(/\s+/g, "_");
    const finalName = `${uniquePrefix}-${sanitizedOriginalName}`;
    cb(null, finalName);
  },
});

module.exports = { storage };
