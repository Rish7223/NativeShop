import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  message: '',
  type: null,
};

const alert = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return { message: payload.message, type: payload.type };
    case REMOVE_ALERT:
      return { message: '', type: null };
    default:
      return state;
  }
};

export default alert;
