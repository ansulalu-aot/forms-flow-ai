import { renderHook } from "@testing-library/react-hooks";
import usePrevious from "../../../components/BPMN/UsePrevious";

describe("usePrevious", () => {
  it("should return the previous value", () => {
    const { result, rerender } = renderHook(
      (value) => usePrevious(value),
      {
        initialProps: "initialValue",
      }
    );

    expect(result.current).toBeUndefined();

    rerender("updatedValue");

    expect(result.current).toBe("initialValue");

    rerender("newUpdatedValue");

    expect(result.current).toBe("updatedValue");
  });
});
