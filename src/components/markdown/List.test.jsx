import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('test the list component', () => {
  it('renders the list', () => {
    const files = [{ title: 'test', body: 'this is a markdown file', id:'ID2938248' }, 
      { title: 'another-test', body: 'another markdown', id: 'ID392045' },
      { title: 'one-more', body: 'last test file', id:'ID24558248' }];
    const wrapper = shallow(
      <List files={files}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
});



