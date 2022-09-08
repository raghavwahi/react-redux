import actions from "./actions";

const initialState = {
  enquires: [],
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === actions.STORE_ENQUIRES) {
    newState.enquires = [...action.payload];
    return newState;
  }

  return state;
};

export default Reducer;
