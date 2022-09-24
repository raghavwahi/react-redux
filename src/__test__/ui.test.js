import { mount } from "enzyme";
import Button from "../UI/Button";
import Input from "../UI/Input";

describe("test ui components", () => {
  test("button", () => {
    const wrapper = mount(<Button>test button</Button>);
    expect(wrapper.find("button").text()).toBe("test button");
  });

  test("input", () => {
    const wrapper = mount(<Input />);
    expect(wrapper.find("input").length).toBe(1);
  });
});
