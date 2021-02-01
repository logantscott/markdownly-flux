import React from 'react';
import { shallow } from 'enzyme';
import Developers from './Developers';

describe('Developers component', () => {
  it('renders Developers', () => {

    const wrapper = shallow(
      <Developers />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
