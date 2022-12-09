import axios from 'axios';

//Toaster
import { toast } from 'react-toastify';
import i18n from '../i18n/i18n';

/**
 * @name api
 * @description common funcation to handle api requests
 * @param url API url
 * @param data JSON data
 * @param type type of request e.g. 'GET' or 'POST'
 */
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
    if (
      err?.response?.status === 401 ||
      err?.response?.status === 403 ||
      err?.response?.status === 503 ||
      err?.response?.status === 500
    ) {
      if (err.response.status === 401 || err.response.status === 403) {
        toast.error(i18n.t('Messages.unAuthorized'));
      } else if (err.response.status === 500) {
        toast.error(i18n.t('Messages.internalError'));
      } else {
        toast.error(i18n.t('Messages.serviceUnavailable'));
      }
      return false;
    } else {
      res = err.response;
    }
  }
  return res;
};
