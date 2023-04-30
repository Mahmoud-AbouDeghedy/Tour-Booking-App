/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alert.js';

export const bookTour = async (tourId) => {
  try {
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
      withCredentials: true,
    });

    window.setTimeout(() => {
      location.assign(session.data.session.url);
    }, 1500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
