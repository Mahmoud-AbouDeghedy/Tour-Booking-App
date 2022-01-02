/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51KAMzOEVPMJg5HSMjQsboTkkWAjY9Wk8zZx7ttaw6FgcxeETJMBQtIuzPSRLoDwvOczy3iwVGhduUcV8tAbhnQ9L00s2qhr6n3'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
