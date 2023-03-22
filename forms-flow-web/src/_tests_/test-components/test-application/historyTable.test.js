
import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { columns_history } from '../../../components/Application/historyTable';

Enzyme.configure({ adapter: new Adapter() });

describe("columns_history function", () => {
  const redirectUrl = "example.com";

  it("should return an array of objects with correct properties", () => {
    const result = columns_history(redirectUrl);
    expect(result).toEqual([
      {
        dataField: "applicationStatus",
        text: expect.any(Object),
        sort: true,
      },
      {
        dataField: "created",
        text: expect.any(Object),
        sort: true,
        formatter: expect.any(Function),
      },
      {
        dataField: "submittedBy",
        text: expect.any(Object),
        sort: true,
      },
      {
        dataField: "formId",
        text: expect.any(Object),
        formatter: expect.any(Function),
      },
    ]);
  });
  it("should have a formatter function for the 'created' column", () => {
    const result = columns_history(redirectUrl);
    const createdColumn = result.find((column) => column.dataField === "created");
    expect(createdColumn.formatter).toEqual(expect.any(Function));
  });

  it("should have a formatter function for the 'formId' column", () => {
    const result = columns_history(redirectUrl);
    const formIdColumn = result.find((column) => column.dataField === "formId");
    expect(formIdColumn.formatter).toEqual(expect.any(Function));
  });
});