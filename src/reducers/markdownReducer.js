import {
  UPDATE_MARKDOWN
} from '../actions/markdownActions';

export const initialState = {
  markdown: '# Hi there'
};

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
