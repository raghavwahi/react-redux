import actions from "./actions";

const initialState = {
  courses: [],
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === actions.STORE_COURSES) {
    newState.courses = [...action.payload];
    return newState;
  }
  return state;
};

export default Reducer;
