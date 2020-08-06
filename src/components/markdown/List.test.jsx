import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import AppProvider from '../../providers/appProvider';

describe('test the list component', () => {
  it('renders the list', () => {
    const wrapper = shallow(
      <AppProvider>
        <List />
      </AppProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
});



