import {
  SET_SEARCH_FIELD,
  REQUST_ROBOTS_PENDING,
  REQUST_REBOTS_SUCCES,
  REQUST_REBOTS_FAILED,
} from "./constants";
const initialStateSearch = {
  search: "",
};
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
export const getRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUST_REBOTS_SUCCES:
      return { ...state, robots: action.payload, isPending: false };
    case REQUST_REBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
