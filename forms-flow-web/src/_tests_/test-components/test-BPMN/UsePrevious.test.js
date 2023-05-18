import React from "react";
import { render, act } from "@testing-library/react";
import usePrevious from "../../../components/BPMN/UsePrevious";

describe("usePrevious", () => {
  it("should return the previous value", () => {
    let value = 1;
    let previousValue;
    const TestComponent = () => {
      previousValue = usePrevious(value);
      return null;
    };
    const { rerender } = render(<TestComponent />);
    expect(previousValue).toBeUndefined();

    act(() => {
      value = 2;
      rerender(<TestComponent />);
    });
    expect(previousValue).toBe(1);

    act(() => {
      value = 3;
      rerender(<TestComponent />);
    });
    expect(previousValue).toBe(2);
  });
});
