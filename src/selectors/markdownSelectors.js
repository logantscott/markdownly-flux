import marked from 'marked';

export const getFiles = state => state.files;

export const getCurrentFileID = state => state.currentFileID;

export const getCurrentMarkdown = state => state.files[getCurrentFileID(state)];

export const getCurrentFilePreview = state => marked(getCurrentMarkdown(state).body);