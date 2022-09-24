import { mount } from "enzyme";
import App from "../App";

describe("test app component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<App />);
  });

  test("Enquries link", () => {
    expect(wrapper.find("[href*='enquries']").text()).toBe("Enquries");
  });

  test("Courses link", () => {
    expect(wrapper.find("[href='/']").text()).toBe("Courses");
  });

  test("Section", () => {
    expect(wrapper.find("section").length).toBe(1);
  });

  test("Header", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  test("Footer", () => {
    expect(wrapper.find("footer").length).toBe(1);
  });
});
