# Natours

This is a backend project for a fictional tour booking company called Natours.

## Getting Started

To get started with the project, clone the repository to your local machine and install the dependencies:

`git clone https://github.com/Mahmoud-AbouDeghedy/natours.git`

`cd natours`

`npm install`

You will also need to set up a MongoDB database and create a `.env` file with your environment variables. See the `.env.example` file for more information.

To start the server, run:

`npm start`


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
-Password reset functionality for users
-Image upload and processing using the Cloudinary API
-Integration with the Mailtrap service for testing email functionality
-Implementing advanced security measures like rate limiting and data sanitization to prevent security vulnerabilities
-Integration with the Mapbox API for displaying tour locations on a map
-Use of the MVC (Model-View-Controller) architecture pattern to organize the project's code
