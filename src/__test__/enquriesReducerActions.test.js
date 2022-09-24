import actions from "../Enquries/actions";
import Reducer from "../Enquries/reducer";

describe("Enquries reducer and actions", () => {
  test("Initial value", () => {
    expect(Reducer(undefined, { type: "INIT", payload: undefined })).toEqual({
      enquires: [],
    });
  });

  test("Load courses", async () => {
    const enquires = [];
    const url = "http://localhost:6556/enquries";
    const options = { method: "GET" };
    const res = await fetch(url, options);

    if (res.status === 200) {
      enquires.push([...(await res.json())]);
    }

    const initialState = { enquires: [] };
    const action = actions.storeEnquiries(enquires);

    expect(Reducer(initialState, action)).toEqual({ enquires });
  });
});
