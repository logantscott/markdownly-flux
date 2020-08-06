import {
  UPDATE_MARKDOWN
} from '../actions/markdownActions';

export const initialState = {
  markdown: '# Hi there',
  files: [{ title: 'test', body: 'this is a markdown file', id:'ID2938248' }, 
    { title: 'another-test', body: 'another markdown', id: 'ID392045' },
    { title: 'one-more', body: 'last test file', id:'ID24558248' }]
};

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
