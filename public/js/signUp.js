/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alert.js';

export const signUp = async (data) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data,
      withCredentials: true,
    });
    if (res.data.status === 'success') {
      showAlert(
        'success',
        'Signed up successfully!, Check your email for verification link'
      );
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
