import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import BaseRouting from '../../components/BaseRouting';
import App from '../../components/App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const history = {};
  const store = {
    getState: () => ({}),
    subscribe: () => {},
    dispatch: () => {},
  };

  it('should render correctly', () => {
    const wrapper = shallow(<App history={history} store={store} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain Provider and ConnectedRouter components', () => {
    const wrapper = shallow(<App history={history} store={store} />);
    expect(wrapper.find(Provider)).toHaveLength(1);
    expect(wrapper.find(ConnectedRouter)).toHaveLength(1);
  });

  it('should contain BaseRouting component', () => {
    const wrapper = shallow(<App history={history} store={store} />);
    expect(wrapper.find(BaseRouting)).toHaveLength(1);
  });
});
