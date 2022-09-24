import { render } from "enzyme";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

describe("test application routes", () => {
  test("home route", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(<Router location={history.location} navigator={history}></Router>);

    expect(history.location.pathname).toBe("/");
  });

  test("enquries route", () => {
    const history = createMemoryHistory({ initialEntries: ["/enquries"] });
    render(<Router location={history.location} navigator={history}></Router>);

    expect(history.location.pathname).toBe("/enquries");
  });

  test("enquiry route", () => {
    const history = createMemoryHistory({ initialEntries: ["/enquiry"] });
    render(<Router location={history.location} navigator={history}></Router>);

    expect(history.location.pathname).toBe("/enquiry");
  });
});
