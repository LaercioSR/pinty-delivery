const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

const uploadDir = path.resolve(
  __dirname,
  "..",
  "..",
  "public",
  "uploads",
  "establishment_images"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function sanitizeFilename(filename) {
  return filename
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]/g, "_");
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),

  filename: (_req, file, cb) => {
    const uniquePrefix = crypto.randomBytes(6).toString("hex");
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const safeBaseName = sanitizeFilename(baseName);

    const finalName = `${uniquePrefix}-${safeBaseName}${ext.toLowerCase()}`;
    cb(null, finalName);
  },
});

module.exports = { storage };
