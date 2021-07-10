import * as ActionTypes from './ActionTypes';

export const deleteChore = chore => ({
    type: ActionTypes.DELETE_CHORE,
    payload: chore
});
export const addChore = chore => ({
    type: ActionTypes.ADD_CHORE,
    payload: chore
});
export const editChore = () => ({
    type: ActionTypes.EDIT_CHORE,
});
export const completeChore = id => ({
    type: ActionTypes.COMPLETE_CHORE,
    payload: id
});


export const deleteBehavior = id => ({
    type: ActionTypes.DELETE_BEHAVIOR,
    payload: id
});
export const addBehavior = behavior => ({
    type: ActionTypes.ADD_BEHAVIOR,
    payload: behavior
});
export const editBehavior = behavior => ({
    type: ActionTypes.EDIT_BEHAVIOR,
    payload: behavior
});


export const deleteBehaviorQ = id => ({
    type: ActionTypes.DELETE_BEHAVIORQ,
    payload: id
});
export const addBehaviorQ = behavior => ({
    type: ActionTypes.ADD_BEHAVIORQ,
    payload: behavior
});
export const approveBehaviorQ = id => ({
    type: ActionTypes.APPROVE_BEHAVIORQ,
    payload: id
});


export const deleteReward = id => ({
    type: ActionTypes.DELETE_REWARD,
    payload: id
});
export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
});
export const editReward = () => ({
    type: ActionTypes.EDIT_REWARD,
});


export const deleteRewardsQ = id => ({
    type: ActionTypes.DELETE_REWARDSQ,
    payload: id
});
export const addRewardsQ = behavior => ({
    type: ActionTypes.ADD_REWARDSQ,
    payload: behavior
});
export const approveRewardsQ = id => ({
    type: ActionTypes.APPROVE_REWARDSQ,
    payload: id
});


export const addPoints = points => ({
    type: ActionTypes.ADD_POINTS,
    payload: points
})
export const editSetting = () => ({
    type: ActionTypes.EDIT_SETTING,
})


export const resetSettings = () => ({
    type: ActionTypes.RESET_SETTINGS,
})
export const resetChores = () => ({
    type: ActionTypes.RESET_CHORES,
})
export const resetBehaviors = () => ({
    type: ActionTypes.RESET_BEHAVIORS,
})
export const resetRewards = () => ({
    type: ActionTypes.RESET_REWARDS,
})
export const resetBehaviorQ = () => ({
    type: ActionTypes.RESET_BEHAVIORQ,
})
export const resetRewardsQ = () => ({
    type: ActionTypes.RESET_REWARDSQ,
})