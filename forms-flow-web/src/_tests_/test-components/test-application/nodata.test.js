// import React from 'react';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow } from 'enzyme';
// import { Translation } from 'react-i18next';
// import Nodata from '../../../components/Application/nodata';

// Enzyme.configure({ adapter: new Adapter() }); 

// describe('Nodata', () => {
//   const props = {
//     text: 'No data found',
//   };

//   it('renders without crashing', () => {
//     const wrapper = shallow(<Nodata {...props} />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('renders the correct text', () => {
//     const wrapper = shallow(<Nodata {...props} />);
//     expect(wrapper.find(Translation).render().text()).toBe(props.text);
//   });  

//   it('matches snapshot', () => {
//     const wrapper = shallow(<Nodata {...props} />);
//     expect(wrapper).toMatchSnapshot();
//   });
// });


import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nodata from "../../../components/Application/nodata";

describe("Nodata Component", () => {

  it("displays the correct text", () => {
    const props = {
      text: "No data available",
    };

    const { getByText } = render(<Nodata {...props} />);
    const textElement = getByText(props.text);

    expect(textElement).toBeInTheDocument();
  });
});

