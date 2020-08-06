const { updateMarkdown } = require('../actions/markdownActions');
const { default: reducer } = require('./markdownReducer');

describe('markdown reducer', () => {
  it('handles the UPDATE_MARKDOWN action', () => {
    const state = {
      markdown: '# Hi there'
    };
    const action = updateMarkdown('heeeeelllloooo1234');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      markdown: 'heeeeelllloooo1234'
    });
  });
});
