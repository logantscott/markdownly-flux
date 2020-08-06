export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (id, title, body) => {
  const newMarkdown = {
    type: UPDATE_MARKDOWN,
    payload: {}
  };
  newMarkdown.payload[id] = { title, body };
  return newMarkdown;
};

