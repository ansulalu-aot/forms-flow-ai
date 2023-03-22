import React from "react";
import { mount } from "enzyme";
import ViewAndEditTaskvariable from "../../../../components/Form/Steps/ViewAndEditTaskvariable";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("ViewAndEditTaskvariable component", () => {
  let component;
  const item = {
    key: "1",
    defaultLabel: "Task 1",
    label: "Task 1",
    showInList: true,
  };
  const deleteTaskVariable = jest.fn();
  const editTaskVariable = jest.fn();

  beforeEach(() => {
    component = mount(
      <ViewAndEditTaskvariable
        item={item}
        index={0}
        deleteTaskVariable={deleteTaskVariable}
        editTaskVariable={editTaskVariable}
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders the task key", () => {
    expect(component.find("input[type='text']").at(0).prop("value")).toEqual(
      item.key
    );
  });

  it("renders the task label", () => {
    expect(component.find("input[type='text']").at(1).prop("value")).toEqual(
      item.label
    );
  });

  it("renders the show in list checkbox", () => {
    expect(component.find("input[type='checkbox']").prop("checked")).toEqual(
      item.showInList
    );
  });

  it("disables the task label input when enableEditTaskVariable is true", () => {
    expect(component.find("input[type='text']").at(1).prop("disabled")).toBe(
      true
    );
  });

  it("enables the task label input when enableEditTaskVariable is false", () => {
    component.find(".fa.fa-edit").simulate("click");
    expect(component.find("input[type='text']").at(1).prop("disabled")).toBe(
      false
    );
  });

  it("calls deleteTaskVariable when delete button is clicked", () => {
    component.find(".fa.fa-times").simulate("click");
    expect(deleteTaskVariable).toHaveBeenCalledWith(item);
  });

  it("calls editTaskVariable with updated data when save button is clicked", () => {
    component.find(".fa.fa-edit").simulate("click");
    component
      .find("input[type='text']")
      .at(1)
      .simulate("change", { target: { value: "Updated task label" } });
    component.find("input[type='checkbox']").simulate("change");
    component.find(".fa.fa-check").simulate("click");
    expect(editTaskVariable).toHaveBeenCalledWith({
      key: item.key,
      defaultLabel: item.defaultLabel,
      label: "Updated task label",
      showInList: !item.showInList,
    });
  });
});
