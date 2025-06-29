import { combineReducers } from "redux";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./action";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataState: dataReducer,
});

export default rootReducer;
