import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SaveAsNewVersionConfirmationModal from '../../../../components/Form/Item/SaveAsNewVersionConfirmationModal';

describe('SaveAsNewVersionConfirmationModal', () => {
  test('renders modal title and body correctly', () => {
    const modalOpen = true;
    const handleModalChange = jest.fn();
    const onConfirm = jest.fn();

    render(
      <SaveAsNewVersionConfirmationModal
        modalOpen={modalOpen}
        handleModalChange={handleModalChange}
        onConfirm={onConfirm}
      />
    );

    const title = screen.getByText('Save as a new version');
    const body = screen.getByText(
      'This will create a new version of the form without changing the path name but with new form id.'
    );

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  test('calls handleModalChange when close button is clicked', () => {
    const modalOpen = true;
    const handleModalChange = jest.fn();
    const onConfirm = jest.fn();

    render(
      <SaveAsNewVersionConfirmationModal
        modalOpen={modalOpen}
        handleModalChange={handleModalChange}
        onConfirm={onConfirm}
      />
    );

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    expect(handleModalChange).toHaveBeenCalledTimes(1);
  });

  test('calls onConfirm when continue button is clicked', () => {
    const modalOpen = true;
    const handleModalChange = jest.fn();
    const onConfirm = jest.fn();

    render(
      <SaveAsNewVersionConfirmationModal
        modalOpen={modalOpen}
        handleModalChange={handleModalChange}
        onConfirm={onConfirm}
      />
    );

    const continueButton = screen.getByText('Continue');
    fireEvent.click(continueButton);

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });
});
