import {
//   SAVE_MARKDOWN,
//   DELETE_MARKDOWN,
  UPDATE_MARKDOWN
} from '../actions/markdownActions';

export const initialState = {
  markdown: '# Hi there'
};

export default function reducer(state, action) {
  switch(action.type) {
    // case SAVE_MARKDOWN:
    //   return ;
    // case DELETE_MARKDOWN:
    //   return ;
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
