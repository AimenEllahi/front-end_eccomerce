const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      localStorage.setItem("AuthToken", action?.payload.token);
      return state;
    default:
      return state;
  }
};

export default reducer;
