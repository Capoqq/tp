import axios from "axios";
import Router from "next/router";

const setUser = (state) => {
  return {
    type: "SET_USER",
    state,
  };
};
export const login = (data,mensaje,open,disabled) => {
  return async (dispatch) => {
    try {
      await axios
        .post("/api/auth", {
          ...data,
        })
        .then((res) => {
          dispatch(setUser(res.data));
          if (res.data.typeUser === 1) {
            Router.push("/admin");
          } else {
            Router.push("/client");
          }
        });
    } catch (error) {
      mensaje(error.response.data.error)
      disabled(false)
      open(true)
      console.log(error);
    }
  };
};
export const logout = () =>{
    return async (dispatch) =>{
      Router.push('/')
        dispatch(setUser(null))
    }
}
