import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SaveNext from '../../../../components/Form/Steps/SaveNext';

const mockStore = configureMockStore();
const store = mockStore({
  process: {
    applicationCount: 1,
  },
});

describe("SaveNext component", () => {
  it("should render with back and next buttons", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SaveNext
          handleNext={jest.fn()}
          handleBack={jest.fn()}
          activeStep={0}
          isLastStep={false}
          submitData={jest.fn()}
          modified={false}
        />
      </Provider>
    );

    expect(getByText("Back")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
  });

  it("should call handleBack when back button is clicked", () => {
    const handleBack = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <SaveNext
          handleNext={jest.fn()}
          handleBack={handleBack}
          activeStep={1}
          isLastStep={false}
          submitData={jest.fn()}
          modified={false}
        />
      </Provider>
    );

    fireEvent.click(getByText("Back"));
    expect(handleBack).toHaveBeenCalled();
  });

  it("should call handleChanges when next button is clicked", () => {
    const handleChanges = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <SaveNext
          handleNext={handleChanges}
          handleBack={jest.fn()}
          activeStep={0}
          isLastStep={false}
          submitData={jest.fn()}
          modified={false}
        />
      </Provider>
    );

    fireEvent.click(getByText("Next"));
    expect(handleChanges).toHaveBeenCalled();
  });

  it("should show confirmation modal when changes are modified", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <SaveNext handleNext={() => {}} modified={true} isLastStep={false} />
      </Provider>
    );

    fireEvent.click(getByText("Next"));

    await waitFor(() => {
      expect(getByText("Confirmation")).toBeInTheDocument();
    });
  });
});
