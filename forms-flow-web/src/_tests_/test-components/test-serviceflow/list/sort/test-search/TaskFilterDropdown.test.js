import React from "react";
import { shallow } from "enzyme";
import TaskFilterDropdown from "../../../../../../components/ServiceFlow/list/search/TaskFilterDropdown";
import { taskFilters } from "../../../../../../components/ServiceFlow/constants/taskConstants";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe("TaskFilterDropdown component", () => {
  const mockFilterSelect = jest.fn();
  const wrapper = shallow(<TaskFilterDropdown onFilterSelect={mockFilterSelect} />);

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of filter items", () => {
    const filterItems = wrapper.find(".filter-items");
    expect(filterItems.children()).toHaveLength(taskFilters.length);
  });

  it("calls onFilterSelect prop function when a filter is clicked", () => {
    const filterIndex = 0;
    const filterItem = wrapper.find(".filter-items").childAt(filterIndex);
    filterItem.simulate("click");
    expect(mockFilterSelect).toHaveBeenCalledWith(taskFilters[filterIndex]);
  });
});
