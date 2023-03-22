import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import DownloadPDFButton from '../../../../components/form/ExportAsPdf/DownloadPDFButton';
import { ButtonState, ExportButton } from '../../../../components/form/ExportAsPdf/button';

describe('DownloadPDFButton', () => {
    const originalBlob = global.Blob;

    beforeAll(() => {
        global.Blob = jest.fn(() => ({ size: 0 }));
    });

    afterAll(() => {
        global.Blob = originalBlob;
    });

    it('renders without crashing', () => {
        render(<DownloadPDFButton />);
    });

    it('shows the export PDF button', () => {
        render(<ExportButton
            label="Export PDF"
            labelLoading="Exporting.."
            buttonState="ready"
            onClick={() => { }} />);

        const exportButton = screen.getByText("Export PDF");
        expect(exportButton).toBeInTheDocument();
    });

    it('downloads a PDF file when the export PDF button is clicked', async () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <ExportButton
                label="Export PDF"
                labelLoading="Exporting.."
                buttonState={ButtonState.Primary}
                onClick={onClickMock}
            />
        );

        const exportButton = await waitFor(() => screen.getByText("Export PDF"));
        fireEvent.click(exportButton);

        await waitFor(() => {
            expect(onClickMock).toHaveBeenCalledTimes(1);
        });

        // Update button state to 'loading'
        const loadingButtonState = ButtonState.Loading;
        render(
            <ExportButton
                label="Export PDF"
                labelLoading="Exporting.."
                buttonState={loadingButtonState}
                onClick={onClickMock}
            />
        );

        await waitFor(() => {
            expect(getByText("Exporting..")).toBeInTheDocument();
        });

    });
});