import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import OperatorFilterDropDown from "../../../../components/ServiceFlow/filter/OperatorFilterDropdown";

describe("OperatorFilterDropDown", () => {
  const compareOptions = ["equals", "contains", "greater than"];
  const operator = "equals";
  const changeOperator = jest.fn();

  test("renders the component", () => {
    render(
      <OperatorFilterDropDown
        compareOptions={compareOptions}
        operator={operator}
        changeOperator={changeOperator}
      />
    );
  });

  test("displays the compare options as select options", () => {
    const { getByText } = render(
      <OperatorFilterDropDown
        compareOptions={compareOptions}
        operator={operator}
        changeOperator={changeOperator}
      />
    );

    compareOptions.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  test("calls the changeOperator function with the selected option", () => {
    const { getByRole } = render(
      <OperatorFilterDropDown
        compareOptions={compareOptions}
        operator={operator}
        changeOperator={changeOperator}
      />
    );

    const selectElement = getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "contains" } });

    expect(changeOperator).toHaveBeenCalledWith("contains");
  });
});
