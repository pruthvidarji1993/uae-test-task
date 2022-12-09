// Toaster
import { toast } from 'react-toastify';

// Action Types
import {
  SET_USER,
  SET_IS_AUTHENTICATED
} from '../types';


//Login Action
export const login = (user, navigate) => {
  return async (dispatch) => {

    //destructuring of the user object to get require data
    let { email, password } = user;

    //encrypting the password

    let userData = {
      email,
      password,
    }
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
    toast.success('Logged in successfully');
  };
};

//Logout Action
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
    toast.success('Logged out successfully');
    navigate('/login');
  };
};
