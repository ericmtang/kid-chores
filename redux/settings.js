import * as ActionTypes from "./ActionTypes";
import { SETTINGS } from "../shared/settings";

export const settings = (state = SETTINGS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SETTING:
      return state.concat(action.payload);

    case ActionTypes.EDIT_SETTING:
      return state;

    case ActionTypes.DELETE_SETTING:
      return state.filter((setting) => setting !== action.payload);

    default:
      return state;
  }
};