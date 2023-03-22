import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import FileModal from "../../../../components/Form/FileUpload/fileUploadModal";

const mockStore = configureStore([]);

describe("FileModal component", () => {
    let store;
    let onClose;

    beforeEach(() => {
        store = mockStore({
            formCheckList: {
                formUploadFormList: [],
                formUploadCounter: 0,
                formUploadFailureCounter: 0,
            },
        });
        onClose = jest.fn();
    });

    it("renders the modal correctly", () => {
        render(
            <Provider store={store}>
                <FileModal modalOpen={true} onClose={onClose} forms={[]} />
            </Provider>
        );
        expect(screen.getByText("File Upload Status")).toBeInTheDocument();
        expect(screen.getByText("Close")).toBeInTheDocument();
    });

    it("displays the correct upload status", () => {
        store = mockStore({
            formCheckList: {
                formUploadFormList: [{ id: 1 }, { id: 2 }],
                formUploadCounter: 1,
                formUploadFailureCounter: 0,
            },
        });
        render(
            <Provider store={store}>
                <FileModal modalOpen={true} onClose={onClose} forms={[{ id: 1 }, { id: 2 }]} />
            </Provider>
        );
        expect(screen.getByText("1 of 2 forms uploaded")).toBeInTheDocument();
        expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "50");
    });

    it("displays the correct failure status", () => {
        store = mockStore({
            formCheckList: {
                formUploadFormList: [{ id: 1 }, { id: 2 }],
                formUploadCounter: 1,
                formUploadFailureCounter: 1,
            },
        });
        render(
            <Provider store={store}>
                <FileModal modalOpen={true} onClose={onClose} forms={[{ id: 1 }, { id: 2 }]} />
            </Provider>
        );
        expect(screen.getByText("Failed to upload 1 form...!")).toBeInTheDocument();
    });

    it("closes the modal when the Close button is clicked", async () => {
        const onClose = jest.fn();
        render(
            <Provider store={store}>
                <FileModal modalOpen={true} onClose={onClose} forms={[]} />
            </Provider>
        );
        userEvent.click(screen.getByTestId("close-button"));
        await waitFor(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        }, { timeout: 1000 });

    });

});

