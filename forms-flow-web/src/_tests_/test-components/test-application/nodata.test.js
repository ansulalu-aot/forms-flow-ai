import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Translation } from 'react-i18next';
import Nodata from '../../../components/Application/nodata';

Enzyme.configure({ adapter: new Adapter() }); 

describe('Nodata', () => {
  const props = {
    text: 'No data found',
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Nodata {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Nodata {...props} />);
    expect(wrapper.find(Translation).render().text()).toBe(props.text);
  });  

  it('matches snapshot', () => {
    const wrapper = shallow(<Nodata {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
