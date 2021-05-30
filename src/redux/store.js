import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducers/dataReducer";
import { DATA_REDUCER_KEY } from "../constants";

export const store = createStore(
  combineReducers({
    [DATA_REDUCER_KEY]: dataReducer,
  })
);
