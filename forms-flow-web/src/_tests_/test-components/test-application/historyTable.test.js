
// import Enzyme from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
// import { columns_history } from '../../../components/Application/historyTable';

// Enzyme.configure({ adapter: new Adapter() });

// describe("columns_history function", () => {
//   const redirectUrl = "example.com";

//   it("should return an array of objects with correct properties", () => {
//     const result = columns_history(redirectUrl);
//     expect(result).toEqual([
//       {
//         dataField: "applicationStatus",
//         text: expect.any(Object),
//         sort: true,
//       },
//       {
//         dataField: "created",
//         text: expect.any(Object),
//         sort: true,
//         formatter: expect.any(Function),
//       },
//       {
//         dataField: "submittedBy",
//         text: expect.any(Object),
//         sort: true,
//       },
//       {
//         dataField: "formId",
//         text: expect.any(Object),
//         formatter: expect.any(Function),
//       },
//     ]);
//   });
//   it("should have a formatter function for the 'created' column", () => {
//     const result = columns_history(redirectUrl);
//     const createdColumn = result.find((column) => column.dataField === "created");
//     expect(createdColumn.formatter).toEqual(expect.any(Function));
//   });

//   it("should have a formatter function for the 'formId' column", () => {
//     const result = columns_history(redirectUrl);
//     const formIdColumn = result.find((column) => column.dataField === "formId");
//     expect(formIdColumn.formatter).toEqual(expect.any(Function));
//   });
// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { columns_history, getoptions } from "../../../components/Application/historyTable";

describe("History Table Component", () => {
  const redirectUrl = "https://example.com";

  it("calls linkSubmision function when submission link is clicked", () => {
    const { getByText } = render(
      <>{columns_history(redirectUrl)[3].formatter("", { formId: 1, submissionId: 1 })}</>
    );

    const link = getByText("View Submission");
    fireEvent.click(link);

    // Add your assertions here to test the function call
  });

  it("renders table options correctly", () => {
    const count = 10;
    const options = getoptions(count);

    expect(options.expandRowBgColor).toBe("rgb(173,216,230)");
    expect(options.pageStartIndex).toBe(1);
    expect(options.alwaysShowAllBtns).toBe(true);
    expect(options.withFirstAndLast).toBe(false);
    expect(options.hideSizePerPage).toBe(true);
    expect(options.paginationSize).toBe(7);
    expect(options.prePageText).toBe("<<");
    expect(options.nextPageText).toBe(">>");
    expect(options.showTotal).toBe(true);
    expect(options.Total).toBe(count);
    expect(options.disablePageTitle).toBe(true);
    expect(options.sizePerPage).toBe(5);
  });
});