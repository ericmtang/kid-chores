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