import { UPDATE_MARKDOWN, updateMarkdown } from './markdownActions';

describe('markdown actions', () => {
  it('updates markdown when typing', () => {
    const action = updateMarkdown('ID2938248', 'update-test', 'updated markdown file');
    const payload = { 'ID2938248': { title:'update-test', body: 'updated markdown file' } };
    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload
    });
  });
});
