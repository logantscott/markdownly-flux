const { updateMarkdown } = require('../actions/markdownActions');
const { default: reducer } = require('./markdownReducer');

describe('markdown reducer', () => {
  it('handles the UPDATE_MARKDOWN action', () => {
    const state = {
      currentFileID: 'ID2938248',
      files: { 'ID2938248': { id: 'ID2938248', title: 'test', body: 'this is a markdown file' },
    'ID392045': { id: 'ID392045', title: 'another-test', body: 'another markdown file' },
    'ID24558248': { id: 'ID24558248', title: 'one-more', body: 'last test file' } }   
};
    const action = updateMarkdown('ID2938248', 'update-test', 'updated markdown file');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentFileID: 'ID2938248',
      files: { 'ID2938248': { id: 'ID2938248', title: 'update-test', body: 'updated markdown file' },
    'ID392045': { id: 'ID392045', title: 'another-test', body: 'another markdown file' },
    'ID24558248': { id: 'ID24558248', title: 'one-more', body: 'last test file' } }   
}
    );
  });
});
