//imports
import { toast } from 'react-toastify';
import { encyptData } from '../../../constants/utils';
import i18n from '../../../i18n/i18n';

// Action Types
import { SET_USER, SET_IS_AUTHENTICATED } from '../types';

/**
 * @name login
 * @description this funcion will take user information and store then in redux state and move page to home page
 */
export const login = (user, navigate) => {
  return async (dispatch) => {
    //destructuring of the user object to get require data
    let { email, password } = user;

    //encrypting the password
    password = encyptData(password);

    let userData = {
      email,
      password,
    };
    //dispatch a action to store user data in redux store
    dispatch({
      type: SET_USER,
      payload: userData,
    });
    //set isAuthenticated flag to true to identify the user is authenticated
    dispatch({
      type: SET_IS_AUTHENTICATED,
      payload: true,
    });

    //push home page in history to move user to home page
    navigate('/');
    toast.success(i18n.t('Messages.loggedInSuccess'));
  };
};

/**
 * @name handleLogout
 * @description this funcion will clear user state from redux and move user back to login page
 */
export const handleLogout = (navigate) => {
  return (dispatch) => {
    //dispatch a action to clear user data in redux store
    dispatch({
      type: SET_USER,
      payload: null,
    });
    //set isAuthenticated flag to false to identify the user is unauthenticated
    dispatch({
      type: SET_IS_AUTHENTICATED,
      payload: false,
    });
    toast.success(i18n.t('Messages.loggedoutSuccess'));
    navigate('/login');
  };
};
