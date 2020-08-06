import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';
import AppProvider from '../../providers/appProvider';

describe('Preview component', () => {
  it('renders Preview', () => {
    const wrapper = shallow(
      <AppProvider>
        <Preview />
      </AppProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
