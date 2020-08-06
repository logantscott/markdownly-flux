const { getFiles, getCurrentFileID, getCurrentMarkdown, getCurrentFilePreview } = require('./markdownSelectors');
import marked from 'marked';
describe('markdown selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      currentFileID: 'ID2938248',
      files: { 'ID2938248': { title: 'test', body: 'this is a markdown file' },
        'ID392045': { title: 'another-test', body: 'another markdown file' },
        'ID24558248': { title: 'one-more', body: 'last test file' } }
    };
  });
  it('returns files from state', () => {
    const files = getFiles(state);

    expect(files).toEqual({ 'ID2938248': { title: 'test', body: 'this is a markdown file' },
      'ID392045': { title: 'another-test', body: 'another markdown file' },
      'ID24558248': { title: 'one-more', body: 'last test file' } });
  });
  it('returns current id from state', () => {
    const id = getCurrentFileID(state);

    expect(id).toEqual('ID2938248');
  });
  it('returns current markdown from state', () => {
    const markdown = getCurrentMarkdown(state);

    expect(markdown).toEqual({ title: 'test', body: 'this is a markdown file' });
  });
  it('returns markdown preview', () => {

    const res = getCurrentFilePreview(state);

    expect(res).toEqual(marked('this is a markdown file'));
  });
});
