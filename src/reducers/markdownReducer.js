import {
    SAVE_MARKDOWN,
    DELETE_MARKDOWN
} from '../actions/markdownActions';

export const initialState = {


};

export default function reducer(state, action) {
    switch(action.type) {
        case SAVE_MARKDOWN:
            return ;
        case DELETE_MARKDOWN:
            return ;
        default:
            return state;
    }
}