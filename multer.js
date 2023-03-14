const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
        cb(null, `${file.originalname}`);
    }
});

const uploadSettings = multer({
    storage: storage,
});

module.exports = uploadSettings;