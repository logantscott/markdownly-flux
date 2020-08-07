import {
  UPDATE_MARKDOWN,
  SAVE_MARKDOWN,
  UPDATE_CURRENTFILEID
} from '../actions/markdownActions';

export const initialState = {
  currentFileID: 'ID2938248',
  files: { 'ID2938248': { id: 'ID2938248', title: 'test', body: 'this is a markdown file' },
    'ID392045': { id: 'ID392045', title: 'another-test', body: 'another markdown file' },
    'ID24558248': { id: 'ID24558248', title: 'one-more', body: 'last test file' } }   
};

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return  { ...state, files: { ...state.files, [state.currentFileID]: action.payload } };
    case SAVE_MARKDOWN:
        return { ...state, files: { ...state.files, ...action.payload }
      };
    case UPDATE_CURRENTFILEID:
      return { ...state, currentFileID: action.payload}
    default:
      return state;
  }
}
