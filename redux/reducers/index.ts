import {
  SET_USERS,
} from '../types';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};