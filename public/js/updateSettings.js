/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alert.js';

export const updateSettings = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:3000/api/v1/users/${
        type === 'data' ? 'updateMe' : 'updateMyPassword'
      }`,
      data,
      withCredentials: true,
    });
    if (res.data.status === 'success') {
      showAlert(
        'success',
        `${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully!`
      );
      window.setTimeout(() => {
        location.reload(true);
      }, 1500);
    } else {
      showAlert('error', res.data.message);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
