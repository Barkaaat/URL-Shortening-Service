# URL Shortening Service

Solution for the [URL Shortening Service](https://roadmap.sh/projects/url-shortening-service) challenge from [roadmap.sh](https://roadmap.sh/).

A simple **URL Shortening Service** built with **Node.js**, **Express**, and **MongoDB**. This service allows you to create shortened URLs, fetch original URLs, update them, and track usage statistics.

## Features
- **Shorten URLs**: Convert long URLs into short, shareable links.
- **Retrieve URLs**: Fetch the original URL using the short code.
- **Update URLs**: Modify an existing shortened URL.
- **Delete URLs**: Remove a URL from the system.
- **Track statistics**: View how many times a URL has been accessed.

## Dependencies
This project relies on the following Node.js libraries:
- [**dotenv**](https://www.npmjs.com/package/dotenv) for loading environment variables.
- [**express**](https://www.npmjs.com/package/express) for routing and handling HTTP requests.
- [**mongoose**](https://www.npmjs.com/package/mongoose) for MongoDB interactions.
- [**nodemon**](https://www.npmjs.com/package/nodemon) for auto-reloading the server during development.

## Prerequisites
Make sure you have the following installed:
- **Node.js** (v12.0.0 or higher)
- **npm** or **yarn** for installing dependencies
- **MongoDB** for storing the URL data

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Barkaaat/URL-Shortening-Service.git
   cd URL-Shortening-Service
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Ensure the `.env` file exists and contains your MongoDB connection URL:
   ```plaintext
   URL=mongodb://localhost:27017/URLs
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints

1. **POST** `/shorten`  
   Add a new URL and generate a short code.

2. **GET** `/shorten/:short`  
   Retrieve the original URL using the short code.

3. **PUT** `/shorten/:short`  
   Update the original URL for a given short code.

4. **DELETE** `/shorten/:short`  
   Delete a shortened URL.

5. **GET** `/shorten/:short/stats`  
   Retrieve access statistics for the short code.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: Database for storing URL mappings and statistics.
- **Mongoose**: ODM library for interacting with MongoDB.

---

## Folder Structure

```plaintext
URL-Shortening-Service/
├── app.js                  # Main server file
├── package.json            # Project configuration
├── routes/
│   └── urlRouter.js        # Route definitions
├── controllers/
│   └── urlController.js    # Business logic for URL handling
├── models/
│   └── urlSchema.js        # MongoDB schema for URLs
└── test_requests.rest      # Example API requests for testing
```

---

## License

This project is licensed under the [MIT License](LICENSE).
