import * as ActionTypes from "./ActionTypes";
import { BEHAVIORS } from "../shared/behaviors";

export const behaviors = (state = BEHAVIORS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BEHAVIOR:
      return state.concat(action.payload);

    case ActionTypes.EDIT_BEHAVIOR:
      return BEHAVIORS;

    case ActionTypes.DELETE_BEHAVIOR:
      return state.filter((behavior) => behavior.id !== action.payload);

    default:
      return state;
  }
};