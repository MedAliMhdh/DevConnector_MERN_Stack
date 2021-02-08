import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initailState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const auth = (state = initailState, action) => {
  const { type, payload } = payload;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: flase,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
