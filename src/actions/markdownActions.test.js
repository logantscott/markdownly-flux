import { UPDATE_MARKDOWN, updateMarkdown } from './markdownActions';

describe('markdown actions', () => {
  it('updates markdown when typing', () => {
    const action = updateMarkdown('helllllllllllloooooooo');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'helllllllllllloooooooo'
    });
  });
});
