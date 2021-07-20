import * as ActionTypes from "./ActionTypes";
import { REWARDS } from "../shared/rewards";

export const rewards = (state = REWARDS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_REWARD:
      return state.concat(action.payload);

    case ActionTypes.EDIT_REWARD:
      console.log("editRewardReducer: ", action.payload)
      return state.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );

    case ActionTypes.DELETE_REWARD:
      return state.filter((reward) => reward.id !== action.payload);

    case ActionTypes.RESET_REWARDS:
      return REWARDS;

    default:
      return state;
  }
};
