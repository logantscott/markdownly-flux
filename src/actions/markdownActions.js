

export const SAVE_MARKDOWN = 'SAVE_MARKDOWN';
export const saveMarkdown = () => ({
  type: SAVE_MARKDOWN
});

export const DELETE_MARKDOWN = 'DELETE_MARKDOWN';
export const deleteMarkdown = () => ({
  type: DELETE_MARKDOWN
});

export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (text) => ({
  type: UPDATE_MARKDOWN,
  payload: text
});
