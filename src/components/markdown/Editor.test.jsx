import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';
import AppProvider from '../../providers/appProvider';

describe('Editor component', () => {
  it('renders Editor', () => {

    const wrapper = shallow(
      <AppProvider>
        <Editor />
      </AppProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
