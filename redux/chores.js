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

    case ActionTypes.COMPLETE_CHORE:
      const now = new Date();
      return state.map((item) =>
        item.id == action.payload
          ? item.completed == null
            ? {
                ...item,
                completed: now.toLocaleString("en-US", { hour12: true }),
              }
            : { ...item, completed: null }
          : item
      );

    case ActionTypes.RESET_CHORES:
      return CHORES;

    default:
      return state;
  }
};
