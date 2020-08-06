const { getMarkdown } = require('./markdownSelectors');

describe('markdown selectors', () => {
  it('returns markdown from state', () => {
    const state = {
      markdown: '# Hi there'
    };

    const markdown = getMarkdown(state);

    expect(markdown).toEqual('# Hi there');
  });
});
