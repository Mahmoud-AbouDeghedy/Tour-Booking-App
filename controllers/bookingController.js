const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Booking = require('../models/bookingModel');
const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourId);

  const product = await stripe.products.create({
    name: `${tour.name} Tour`,
    description: tour.summary,
    images: [
      `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
    ],
  });

  const price = await stripe.prices.create({
    unit_amount: tour.price * 100,
    currency: 'usd',
    product: product.id,
  });

  const session = await stripe.checkout.sessions.create({
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,

    success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
    payment_method_types: ['card'],
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  res.status(200).json({
    status: 'success',
    session,
  });
});

const createBookingCheckout = async (session) => {
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.amount_total / 100;

  await Booking.create({ tour, user, price });
};

exports.webhookCheckout = async (req, res, next) => {
  const signature = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    createBookingCheckout(event.data.object);
  }

  res.status(200).json({
    received: true,
    data: {
      tourId: event.data.object.client_reference_id,
      userId: (await User.findOne({ email: event.data.object.customer_email }))
        .id,
      price: event.data.object.amount_total / 100,
    },
  });
};

exports.getAllBookings = handlerFactory.getAll(Booking);
exports.createBooking = handlerFactory.createOne(Booking);
exports.deleteBooking = handlerFactory.deleteOne(Booking);
exports.updateBooking = handlerFactory.updateOne(Booking);
exports.getBooking = handlerFactory.getOne(Booking);
