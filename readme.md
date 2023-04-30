# Natours

This is a backend project for a fictional tour booking company called Natours.

## Getting Started

To get started with the project, clone the repository to your local machine and install the dependencies:

`git clone https://github.com/Mahmoud-AbouDeghedy/natours.git`

`cd natours`

`npm install`

To start the server, run:

`npm start`

The server will listen on port `3000` by default. You can access the API at `http://localhost:3000/api/v1`.

or

`npm run start:prod`

The server will listen on port `3000` by default. You can access the API at `http://localhost:3000/api/v1`.

## Features

The Natours project includes the following features:

- User authentication and authorization using JWT tokens
- Handling of user roles and permissions
- CRUD operations for tours, reviews, users, and bookings
- Advanced filtering and sorting of tours
- Aggregation of tour statistics using MongoDB's aggregation framework
- Integration with the Stripe payment API
- Handling of errors and exceptions using middleware
- Logging of API requests using Winston
- Password reset functionality for users
- Image upload and processing using the Cloudinary API
- Integration with the Mailtrap service for testing email functionality
- Implementing advanced security measures like rate limiting and data sanitization to prevent security vulnerabilities
- Integration with the Mapbox API for displaying tour locations on a map
- Use of the MVC (Model-View-Controller) architecture pattern to organize the project's code
- Use of the Pug template engine to render HTML templates on the server
- Use of the SendinBlue API for sending real emails to users
- Use of the Multer middleware for uploading images
- Use of the Sharp library for resizing and optimizing images
- Error handling using the Express-Async-Errors library
- Error handling for production using the global error handling middleware
- Use of the Stripe webhook API for handling asynchronous payment events
- Use of the Stripe checkout session API for creating checkout sessions

## Technologies Used

- `Node.js`: a server-side JavaScript runtime environment for building scalable and efficient network applications
- `Express`: a popular Node.js web application framework for building APIs and web applications
- `MongoDB`: a popular NoSQL database for storing and querying large volumes of unstructured data
- `Mongoose`: an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a more intuitive way to interact with MongoDB
- `JWT`: a widely-used standard for representing and transmitting secure authentication and authorization information
- `Stripe`: a payment processing platform for securely processing credit and debit card payments
- `Mailtrap`: an email testing service that helps developers test email notifications without sending them to real users
- `Mapbox`: a popular location data platform for building location-based applications and services
- `Pug`: a template engine for Node.js that makes it easy to create HTML templates with JavaScript
- `SendInBlue`: a transactional email service for sending emails to real users
- `CSS`: a style sheet language used for describing the presentation of a document written in a markup language such as HTML
- `Multer`: a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files
- `Sharp`: a Node.js image processing library for resizing and optimizing images -`Prettier`: an opinionated code formatter that helps maintain consistent code style across the entire project
- `ESLint`: a popular JavaScript linter for identifying and reporting on patterns found in JavaScript code
- `parcel`: a web application bundler for JavaScript and CSS
