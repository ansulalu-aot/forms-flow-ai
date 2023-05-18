import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubmissionError from "../../containers/SubmissionError";

describe("SubmissionError", () => {
  test("renders the error message and calls onConfirm when the button is clicked", () => {
    const onConfirmMock = jest.fn();
    const errorMessage = "Something went wrong";

    render(
      <SubmissionError modalOpen={true} onConfirm={onConfirmMock} message={errorMessage} />
    );

    const errorTitle = screen.getByText("Error");
    const errorBody = screen.getByText(errorMessage);
    const confirmButton = screen.getByText("Ok");

    expect(errorTitle).toBeInTheDocument();
    expect(errorBody).toBeInTheDocument();

    fireEvent.click(confirmButton);

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
