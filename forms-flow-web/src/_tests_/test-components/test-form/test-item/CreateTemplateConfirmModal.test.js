import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CreateTemplateConfirmModal from '../../../../components/Form/Item/CreateTemplateConfirmModal';


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn((key) => key), // mock the t function to return the key as text
  }),
}));

describe('CreateTemplateConfirmModal', () => {
  const mockHandleModalChange = jest.fn();
  const mockOnConfirm = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render with correct content', () => {
    const { getByText } = render(
      <CreateTemplateConfirmModal
        modalOpen={true}
        handleModalChange={mockHandleModalChange}
        onConfirm={mockOnConfirm}
      />
    );

    expect(getByText('Create a duplicate form')).toBeInTheDocument();
    expect(
      getByText(
        'Do you want to create a duplicate form and associated workflow from existing form ?'
      )
    ).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();
  });

  it('should trigger handleModalChange when "No" button is clicked', () => {
    const { getByText } = render(
      <CreateTemplateConfirmModal
        modalOpen={true}
        handleModalChange={mockHandleModalChange}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(getByText('No'));
    expect(mockHandleModalChange).toHaveBeenCalledTimes(1);
  });

  it('should trigger onConfirm when "Yes" button is clicked', () => {
    const { getByText } = render(
      <CreateTemplateConfirmModal
        modalOpen={true}
        handleModalChange={mockHandleModalChange}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(getByText('Yes'));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });
});