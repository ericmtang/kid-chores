import * as ActionTypes from "./ActionTypes";
import { REWARDS } from "../shared/rewards";

export const rewards = (state = REWARDS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_REWARD:
      return state.concat(action.payload);

    case ActionTypes.EDIT_REWARD:
      return state;

    case ActionTypes.DELETE_REWARD:
      return state.filter((reward) => reward !== action.payload);

    default:
      return state;
  }
};