import {
  ACTION_TYPE_ADD_ACTIVE_USER,
  ACTION_TYPE_REMOVE_ACTIVE_USER,
  ACTION_TYPE_SET_ACTIVE_USERS,
  ACTION_TYPE_SET_DATA,
} from "../../constants";

const initialState = {
  data: [],
  activeUsers: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ACTION_TYPE_ADD_ACTIVE_USER: {
      return {
        ...state,
        activeUsers: Array.from(
          new Set([...state.activeUsers, action.payload])
        ),
      };
    }
    case ACTION_TYPE_REMOVE_ACTIVE_USER: {
      return {
        ...state,
        activeUsers: state.activeUsers.filter((el) => el !== action.payload),
      };
    }
    case ACTION_TYPE_SET_ACTIVE_USERS: {
      return {
        ...state,
        activeUsers: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
