import { shallow } from "enzyme";
import NotFoundPage from "../Pages/NotFoundPage";

describe("Not found component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<NotFoundPage />);
  });

  test("h1 count", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });

  test("Page not found", () => {
    expect(wrapper.find("h1").text()).toBe("ERROR PAGE NOT FOUND");
  });
});
