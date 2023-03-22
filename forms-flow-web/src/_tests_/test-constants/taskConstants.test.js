import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { TASK_FILTER_LIST_DEFAULT_PARAM, DEFAULT_WORKFLOW } from "../../constants/taskConstants";

describe("Constants", () => {
  describe("TASK_FILTER_LIST_DEFAULT_PARAM", () => {
    it("should have correct sortBy value", () => {
      expect(TASK_FILTER_LIST_DEFAULT_PARAM.sortBy).toBe("created");
    });

    it("should have correct sortOrder value", () => {
      expect(TASK_FILTER_LIST_DEFAULT_PARAM.sortOrder).toBe("desc");
    });

    it("should have correct label value", () => {
      const { getByText } = render(TASK_FILTER_LIST_DEFAULT_PARAM.label);
      expect(getByText("Created")).toBeInTheDocument();
    });
  });

  describe("DEFAULT_WORKFLOW", () => {
    it("should have correct label value", () => {
      expect(DEFAULT_WORKFLOW.label).toBe("Default Flow");
    });

    it("should have correct value", () => {
      expect(DEFAULT_WORKFLOW.value).toBe("Defaultflow");
    });
  });
});
