import * as actionTypes from "./../actions/actionTypes";
import { EMPTY_STRING } from "./../../constants/helper";

const initialState = {
  auth: JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth"))
    : EMPTY_STRING
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER:
      localStorage.setItem("auth", JSON.stringify(action.auth));
      return {
        auth: action.auth
      };
    default:
      return state;
  }
};
export default reducer;
