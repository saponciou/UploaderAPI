//imports
const express = require("express");
const multer = require("multer");
require('dotenv').config();
const authMiddleware = require('./middleware');
const uploadSettings = require("./multer");
//conts
const app = express();
const upload = uploadSettings;

//express settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//global settings
const port = 5000;
// error handler middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.post('/upload', upload.array('files'), authMiddleware, uploadFiles, function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Error uploading files' });
});

function uploadFiles(req, res) {
    console.log(req.files);
    res.json({ message: 'File uploaded successfully!' });
}
app.listen(port, () => {
    console.log(`Server started in http://localhost:${port}`);
});