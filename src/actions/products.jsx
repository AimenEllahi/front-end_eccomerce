import * as api from "../api/index";

export const getProducts = () => async (dispatch) => {
  try {
    //console.log("jdskbvsjd");
    const { data } = await api.fetchProducts();
    //console.log(data);
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
