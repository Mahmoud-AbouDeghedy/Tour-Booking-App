const express = require('express');

const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const Router = express.Router();

Router.use(authController.protect);

Router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

Router.use(authController.restrictTo('lead-guide', 'admin'));

Router.route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

Router.route('/:id')
  .delete(bookingController.deleteBooking)
  .patch(bookingController.updateBooking)
  .get(bookingController.getBooking);

module.exports = Router;
