import { render, screen, fireEvent } from '@testing-library/react';
import TaskFilterDropdown from "../../../../../../components/ServiceFlow/list/search/TaskFilterDropdown";

const mockFilters = [
  { label: 'Filter 1' },
  { label: 'Filter 2' },
  { label: 'Filter 3' },
];

describe('TaskFilterDropdown', () => {
  it('renders the filter items correctly', () => {
    render(<TaskFilterDropdown onFilterSelect={() => {}} />);
    
    const filterItems = screen.getAllByRole('button');
    expect(filterItems.length).toBe(mockFilters.length);
    
    filterItems.forEach((filterItem, index) => {
      expect(filterItem.textContent).toBe(mockFilters[index].label);
    });
  });
  
  it('calls the onFilterSelect callback when a filter item is clicked', () => {
    const mockOnFilterSelect = jest.fn();
    render(<TaskFilterDropdown onFilterSelect={mockOnFilterSelect} />);
    
    const filterItems = screen.getAllByRole('button');
    
    fireEvent.click(filterItems[1]);
    expect(mockOnFilterSelect).toHaveBeenCalledWith(mockFilters[1]);
    
    fireEvent.click(filterItems[2]);
    expect(mockOnFilterSelect).toHaveBeenCalledWith(mockFilters[2]);
  });
});
