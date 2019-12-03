import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
  test("Status from Props should be in the State", () => {
    const component = create(<ProfileStatus status="Network"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Network");
  });

  test("after component creation span shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Network"/>);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input")
    }).toThrow();
  });
  test("after creation <span> should contain correct status from state props", () => {
    const component = create(<ProfileStatus status="Network"/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Network");
  });
  }
);