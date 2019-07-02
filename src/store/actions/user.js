import * as type from "./actionTypes";

export const changeUser = auth => {
  return {
    type: type.CHANGE_USER,
    auth
  };
};
