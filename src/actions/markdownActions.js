export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (id, title, body) => {
  return {
    type: UPDATE_MARKDOWN,
    payload: { id, title, body }
  };
};

export const SAVE_MARKDOWN = 'SAVE_MARKDOWN';
export const saveMarkdown = (id, title, body) => {
    return {
        type: SAVE_MARKDOWN,
        payload: { [id]: { id, title, body } }
    };
};

export const UPDATE_CURRENTFILEID = 'UPDATE_CURRENTFILEID';
export const updateCurrentFileID = (id) => {
  return {
    type: UPDATE_CURRENTFILEID,
    payload: id
  }
}
