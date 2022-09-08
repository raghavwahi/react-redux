import { createStore, combineReducers } from "redux";
import coursesReducer from "./../Courses/reducer";
import enquiresReducer from "./../Enquries/reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  enquries: enquiresReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
