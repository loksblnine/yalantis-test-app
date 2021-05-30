import {
  ACTION_TYPE_ADD_ACTIVE_USER,
  ACTION_TYPE_REMOVE_ACTIVE_USER,
  ACTION_TYPE_SET_ACTIVE_USERS,
  ACTION_TYPE_SET_DATA,
} from "../../constants";

export const setDataAction = (newData) => ({
  type: ACTION_TYPE_SET_DATA,
  payload: newData,
});

export const addActiveUserAction = (newUser) => ({
  type: ACTION_TYPE_ADD_ACTIVE_USER,
  payload: newUser,
});

export const removeActiveUserAction = (userToRemove) => ({
  type: ACTION_TYPE_REMOVE_ACTIVE_USER,
  payload: userToRemove,
});

export const setActiveUsers = (newActiveUsers) => ({
  type: ACTION_TYPE_SET_ACTIVE_USERS,
  payload: newActiveUsers,
});
