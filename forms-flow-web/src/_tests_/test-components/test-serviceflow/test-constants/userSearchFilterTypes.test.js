import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import {
    SearchByLastName,
    SearchByFirstName,
    SearchByEmail,
    UserSearchFilterTypes,
} from "../../../../components/ServiceFlow/constants/userSearchFilterTypes";

describe("UserSearchFilterTypes", () => {
    test("contains the expected fields", () => {
        expect(UserSearchFilterTypes).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    searchType: expect.any(String),
                    title: expect.any(Object),
                }),
            ])
        );

    });

    test("contains the expected search types", () => {
        const searchTypes = UserSearchFilterTypes.map((type) => type.searchType);
        expect(searchTypes).toEqual(
            expect.arrayContaining([SearchByLastName, SearchByFirstName, SearchByEmail])
        );
    });

    test("contains the expected titles", () => {
        const { getByText } = render(
            <>
                {UserSearchFilterTypes.map((type) => type.title)}
            </>
        );
        expect(getByText(/Search By Last Name/)).toBeInTheDocument();
        expect(getByText(/Search By First Name/)).toBeInTheDocument();
        expect(getByText(/Search By Email/)).toBeInTheDocument();

    });
});