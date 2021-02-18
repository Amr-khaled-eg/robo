import {
  SET_SEARCH_FIELD,
  REQUST_ROBOTS_PENDING,
  REQUST_REBOTS_SUCCES,
  REQUST_REBOTS_FAILED,
} from "./constants";

export const setSearchField = (text) => ({
  type: SET_SEARCH_FIELD,
  payload: text,
});
export const requstRobots = () => (dispatch) => {
  dispatch({ type: REQUST_ROBOTS_PENDING });
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((rawData) => rawData.json())
    .then((data) => {
      dispatch({ type: REQUST_REBOTS_SUCCES, payload: data });
    })
    .catch((error) => dispatch({ type: REQUST_REBOTS_FAILED, payload: error }));
};
