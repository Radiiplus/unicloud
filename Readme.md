**Unicloud: Cloud Storage Server Documentation**

**Overview:**
Unicloud is a Node.js application serving as a cloud storage solution, facilitating file upload, download, listing, and deletion operations. It utilizes Express and Multer for efficient file handling.

**Features:**
- File Upload
- File Download
- File Listing
- File Deletion

**Dependencies:**
- Express
- Multer
- Path
- fs.promises
- Morgan

**Setup:**
1. Install Node.js and npm.
2. Initialize a Node.js project.
3. Install dependencies: `express`, `multer`, `morgan`.
4. Set up directories and HTML files.

**Endpoints:**
- GET /: Homepage with upload form.
- GET /upload: HTML page with upload form.
- POST /upload: Handles file uploads.
- GET /download/:filename: Downloads specified file.
- GET /files: Retrieves available files.
- DELETE /delete/:filename: Deletes specified file.

**Configuration:**
- Max file size for uploads: 10GB (adjustable).

**Security:**
- Validate and sanitize user input.
- Implement authentication and authorization mechanisms.

**Conclusion:**
Unicloud offers a minimal yet effective solution for cloud storage needs, with intuitive endpoints and customizable configuration options.