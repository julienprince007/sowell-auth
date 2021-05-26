import state from "./state";

export const setJWT = (state, payload) => {
  state.jwt = payload;
};

export const clearJWT = (state) => {
  state.jwt = "";
};
