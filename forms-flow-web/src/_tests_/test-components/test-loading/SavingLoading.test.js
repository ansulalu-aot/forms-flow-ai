import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SavingLoading from '../../../components/Loading/SavingLoading';

describe('SavingLoading component', () => {
  test('displays spinner when not saved', () => {
    render(<SavingLoading saved={false} text="Saving..." />);
    const spinner = screen.getByTestId('spinner-icon');
    expect(spinner).toBeInTheDocument();
  });

  test('displays check mark when saved', () => {
    render(<SavingLoading saved={true} text="Saved" />);
    const checkmark = screen.getByTestId('checkmark-icon');
    expect(checkmark).toBeInTheDocument();
  });

  test('updates animation when saved prop changes', () => {
    const { rerender} = render(<SavingLoading saved={true} text="Saved" />);
    const spinner = screen.getByTestId('checkmark-icon');
    expect(spinner.classList.contains('transition-start')).toBe(false);

    rerender(<SavingLoading saved={false} text="Saving..." />);
    expect(spinner.classList.contains('transition-end')).toBe(false);
  });

});
