import * as ActionTypes from "./ActionTypes";
import { BEHAVIORS } from "../shared/behaviors";

export const behaviors = (state = BEHAVIORS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BEHAVIOR:
      return state.concat(action.payload);

    case ActionTypes.EDIT_BEHAVIOR:
      console.log("editBehaviorReducer: ", action.payload)
      return state.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );

    case ActionTypes.DELETE_BEHAVIOR:
      return state.filter((behavior) => behavior.id !== action.payload);

    case ActionTypes.RESET_BEHAVIORS:
      return BEHAVIORS;

    default:
      return state;
  }
};
