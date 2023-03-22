import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from '@testing-library/react';
import { ExportButton, ButtonState } from '../../../../components/Form/ExportAsPdf/button';

describe('ExportButton', () => {
  it('should render the button label when not loading', () => {
    render(
      <ExportButton
        buttonState={ButtonState.Primary}
        label="Export"
        onClick={() => {}}
      />,
    );

    expect(screen.getByText('Export')).toBeInTheDocument();
  });

  it('should render the loading spinner when loading', () => {
    render(
      <ExportButton
        buttonState={ButtonState.Loading}
        label="Export"
        labelLoading="Exporting..."
        onClick={() => {}}
      />,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Exporting...')).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const onClick = jest.fn();

    render(
      <ExportButton
        buttonState={ButtonState.Primary}
        label="Export"
        onClick={onClick}
      />,
    );

    fireEvent.click(screen.getByText('Export'));

    expect(onClick).toHaveBeenCalled();
  });
});