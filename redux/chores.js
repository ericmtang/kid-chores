import * as ActionTypes from "./ActionTypes";
import { CHORES } from "../shared/chores";

export const chores = (state = CHORES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CHORE:
      return state.concat(action.payload);

    case ActionTypes.EDIT_CHORE:
      return CHORES;

    case ActionTypes.DELETE_CHORE:
      return state.filter((chore) => chore.id !== action.payload);

    default:
      return state;
  }
};
