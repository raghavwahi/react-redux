import actions from "../Courses/actions";
import Reducer from "../Courses/reducer";

describe("Courses reducer and actions", () => {
  test("Initial value", () => {
    expect(Reducer(undefined, { type: "INIT", payload: undefined })).toEqual({
      courses: [],
    });
  });

  test("Load courses", async () => {
    const courses = [];
    const url = "http://localhost:6556/courses";
    const options = { method: "GET" };
    const res = await fetch(url, options);

    if (res.status === 200) {
      courses.push([...(await res.json())]);
    }

    const initialState = { courses: [] };
    const action = actions.storeCourses(courses);

    expect(Reducer(initialState, action)).toEqual({ courses });
  });
});
