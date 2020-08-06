export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (id, title, body) => {
  return {
    type: UPDATE_MARKDOWN,
    payload: { [id]: { title, body } }
  };
};

