import { SET_USER, SET_IS_AUTHENTICATED } from '../../actions/types';

const initalState = {
  user: null,
  isAuthenticated: false,
};

export const login = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case SET_IS_AUTHENTICATED: {
      return { ...state, isAuthenticated: action.payload };
    }
    default: {
      return state;
    }
  }
};
