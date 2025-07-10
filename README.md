# File Uploading with Node.js, Express, MongoDB, and Cloudinary

This repository is designed as a practical guide to help you learn how to implement file uploading in a Node.js application using Express, MongoDB, and Cloudinary. It includes sample code, step-by-step instructions, and best practices for handling file uploads securely and efficiently.

## Features

- Upload files (images, documents, etc.) from the client to the server
- Store file metadata in MongoDB
- Upload and manage files on Cloudinary cloud storage
- Retrieve and display uploaded files
- Environment variable management for sensitive credentials

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing file metadata
- **Mongoose**: ODM for MongoDB
- **Cloudinary**: Cloud-based image and video management
- **dotenv**: For managing environment variables

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/file-uploading-node-express-mongodb-cloudinary.git
   cd file-uploading-node-express-mongodb-cloudinary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

## Usage

1. **Start the server**
   ```bash
   npm start
   ```

2. **Upload a file**

   Use a tool like Postman or a frontend form to send a `POST` request to `/upload` with a file attached.

3. **View uploaded files**

   Access the `/files` endpoint to retrieve metadata and Cloudinary URLs for uploaded files.

## Folder Structure

```
/models        # Mongoose schemas
/routes        # Express routes
/controllers   # Logic for handling uploads
/.env.example  # Example environment config
/app.js        # Entry point
```

## API Endpoints

| Method | Endpoint    | Description                |
|--------|-------------|----------------------------|
| POST   | /upload     | Upload a file              |
| GET    | /files      | List all uploaded files    |

## Learning Objectives

- Understand how to handle file uploads in Express
- Learn to store file metadata in MongoDB
- Integrate Cloudinary for cloud file storage
- Securely manage API keys and credentials
- Build RESTful endpoints for file management

## License

This project is open-source and available under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- [Express documentation]
- [MongoDB documentation]
- [Cloudinary documentation]

: https://expressjs.com/
: https://docs.mongodb.com/
: https://cloudinary.com/documentation

Developed and maintained by Vishal Singh.
