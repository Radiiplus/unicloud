**Express File Upload Server Documentation**

**Overview:**
The Express File Upload Server is a Node.js application designed to handle file upload, download, listing, and deletion operations. It utilizes the Express framework along with middleware like Multer for handling file uploads.

**Features:**
1. **File Upload:** Users can upload files to the server using a simple HTML form.
2. **File Download:** Users can download files that have been previously uploaded to the server.
3. **File Listing:** Provides an endpoint to retrieve a list of available files on the server.
4. **File Deletion:** Enables users to delete files from the server.

**Dependencies:**
1. **Express:** A fast, unopinionated, minimalist web framework for Node.js, used for handling HTTP requests and responses.
2. **Multer:** A middleware for handling multipart/form-data, which is primarily used for uploading files.
3. **Path:** A core module for handling file paths.
4. **fs.promises:** A core module for asynchronous file operations.
5. **Morgan:** A HTTP request logger middleware for Node.js, used for logging incoming requests.

**Setup:**
1. Install Node.js and npm if not already installed.
2. Create a new directory for your project and navigate to it.
3. Run `npm init -y` to initialize a new Node.js project with default settings.
4. Install dependencies using `npm install express multer morgan`.
5. Create necessary directories (`public` for static files, `uploads` for uploaded files) and HTML files (`index.html` and `upload.html`) in the project directory.

**Usage:**
1. Start the server by running `node <filename>.js` where `<filename>` is the name of your main server file.
2. Access the server endpoints through a web browser or HTTP client (e.g., Postman).
3. Use the provided HTML forms to upload files or navigate to the appropriate endpoints for listing, downloading, or deleting files.

**Endpoints:**
1. **GET /:** Serves the homepage with an HTML form for uploading files.
2. **GET /upload:** Serves an HTML page with a file upload form.
3. **POST /upload:** Handles file uploads. Expects a file to be uploaded with the form field name 'file'.
4. **GET /download/:filename:** Downloads the file with the specified filename.
5. **GET /files:** Retrieves a list of available files on the server.
6. **DELETE /delete/:filename:** Deletes the file with the specified filename from the server.

**Configuration:**
- The maximum file size for uploads is set to 10GB by default but can be adjusted as needed by modifying the `maxFileSize` variable in the server code.

**Security Considerations:**
- Ensure proper validation and sanitization of user input to prevent security vulnerabilities such as directory traversal attacks.
- Implement authentication and authorization mechanisms if sensitive data is being uploaded or accessed.

**Conclusion:**
The Express File Upload Server provides a simple yet powerful solution for handling file upload and management tasks in a Node.js environment. With its intuitive endpoints and customizable configuration options, it can be easily integrated into various web applications requiring file handling capabilities.