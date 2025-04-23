const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'public', 'uploads', 'estabelecimento_images'),
        filename: (request, file, callback) => {
            const hash = crypto.randomBytes(6).toString('hex');

            const filename = `${hash}-${file.originalname}`;

            callback(null, filename);
        }
    }),
};