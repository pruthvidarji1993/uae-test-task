import axios from 'axios';

//Toaster
import { toast } from 'react-toastify';


export const api = async (url, data, type) => {
  let res = null;

  try {
    switch (type) {
      case 'post':
        res = await axios({
          data,
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          url,
        });
        break;
      case 'get':
        res = await axios({
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
          url,
        });
        break;
      case 'patch':
        res = await axios({
          method: 'patch',
          data,
          headers: {
            'Content-Type': 'application/json',
          },
          url,
        });

        break;
      case 'delete':
        res = await axios({
          data,
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
          url,
        });
        break;
      default:
        return true;
    }
  } catch (err) {
    //Remove the user if getting unauthorized or expired token related error
    if (
      err?.response?.status === 401 ||
      err?.response?.status === 403 ||
      err?.response?.status === 503 ||
      err?.response?.status === 500
    ) {
      if (err.response.status === 401 || err.response.status === 403) {
        toast.error('Session expired');
      } else if (err.response.status === 500) {
        toast.error('Internal server error');
      } else {
        toast.error('Service unavailable');
      }
      return false;
    } else {
      res = err.response;
    }
  }
  return res;
};
