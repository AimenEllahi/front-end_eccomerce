import * as api from "../api/index";

export const login = (user) => async (dispatch) => {
  try {
    console.log("We are in login");
    const { data } = await api.login(user);

    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const { data } = await api.register(user);

    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
