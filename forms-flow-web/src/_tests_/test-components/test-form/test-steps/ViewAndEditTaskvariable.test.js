import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ViewAndEditTaskvariable from "../../../../components/Form/Steps/ViewAndEditTaskvariable";

describe("ViewAndEditTaskvariable", () => {
  const item = {
    key: "taskKey",
    label: "Task Label",
    showInList: true,
    defaultLabel: "Default Label",
  };

  const deleteTaskVariable = jest.fn();
  const editTaskVariable = jest.fn();

  test("renders the component correctly", () => {
    render(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );

  });

  test("allows editing of task label", () => {
    const { getByLabelText } = render(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );

    const taskLabelInput = getByLabelText("Task Label");
    fireEvent.change(taskLabelInput, { target: { value: "Updated Label" } });

  });

  test("toggles showInList checkbox", () => {
    const { getByLabelText } = render(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );

    const showInListCheckbox = getByLabelText("Show in List");
    fireEvent.click(showInListCheckbox);

  });

  test("calls deleteTaskVariable when delete button is clicked", () => {
    const { getByRole } = render(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );

    const deleteButton = getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);

    expect(deleteTaskVariable).toHaveBeenCalledWith(item);
  });

  test("calls editTaskVariable when save button is clicked", () => {
    const { getByRole } = render(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );

    const editButton = getByRole("button", { name: "Edit" });
    fireEvent.click(editButton);

    const saveButton = getByRole("button", { name: "Save" });
    fireEvent.click(saveButton);

    expect(editTaskVariable).toHaveBeenCalledWith(item);
  });
});
