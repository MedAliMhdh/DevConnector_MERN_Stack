import { SET_ALERT, REMOVE_ALERT } from "./types";

const setAlert = (message, alertType, timeout = 5000) => async (dispatch) => {
  const id = Math.random();
  dispatch({
    type: SET_ALERT,
    payload: { message, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export default setAlert;
