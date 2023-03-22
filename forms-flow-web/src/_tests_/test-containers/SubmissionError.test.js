import React from "react";
import { shallow } from "enzyme";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SubmissionError from "../../containers/SubmissionError";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
      t: (str) => str,
    }),
  }));

describe("SubmissionError", () => {
  it("should render the error message passed as props", () => {
    const message = "Something went wrong";
    const wrapper = shallow(<SubmissionError modalOpen={true} message={message} />);
    expect(wrapper.find(Modal.Body).text()).toEqual(message);
  });

  it("should call onConfirm function when the Ok button is clicked", () => {
    const onConfirm = jest.fn();
    const wrapper = shallow(<SubmissionError modalOpen={true} onConfirm={onConfirm} />);
    wrapper.find(Button).simulate("click");
    expect(onConfirm).toHaveBeenCalled();
  });
});
