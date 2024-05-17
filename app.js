const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises; // Use fs.promises for async file operations
const morgan = require('morgan');

const app = express();
const port = 3000;

// Define global variable for maximum file size (10GB)
const maxFileSize = 10 * 1024 * 1024 * 1024; // 10 GB

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        res.status(200).send(content);
    } catch (err) {
        res.status(404).send('404 Not Found');
    }
});

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: maxFileSize } // Update upload limit
}).single('file');

// Serve the upload form
app.get('/upload', (req, res) => res.sendFile(path.join(__dirname, 'public', 'upload.html')));

// Handle POST request
app.post('/upload', async (req, res) => {
    try {
        await new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        if (req.file) {
            console.log('File uploaded successfully');
            res.send('File uploaded!');
        } else {
            res.status(400).send('No file uploaded.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while uploading the file.');
    }
});

// Handle download request
app.get('/download/:filename', async (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', fileName);

    try {
        await fs.access(filePath, fs.constants.F_OK);
        res.download(filePath);
    } catch (err) {
        console.error(err);
        res.status(404).send('File not found.');
    }
});

// Endpoint to get list of available files
app.get('/files', async (req, res) => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'uploads'));
        res.json(files);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while reading the files.');
    }
});

// Endpoint to delete files
app.delete('/delete/:filename', async (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', fileName);

    try {
        await fs.unlink(filePath);
        console.log(`File "${fileName}" deleted successfully.`);
        res.send(`File "${fileName}" deleted successfully.`);
    } catch (err) {
        console.error(err);
        res.status(500).send(`An error occurred while deleting the file "${fileName}".`);
    }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
