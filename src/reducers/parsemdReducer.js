import { PARSE_MARKDOWN, TOGGLE_EDITOR, TOGGLE_PREVIEWER, RESET_VIEW } from "../action-types/parsemdActionTypes";

// Define default state
const defaultState = {
    output: '',
    toggleEditor: true,
    togglePreviewer: true
}

// Define reducer
const parsemdReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PARSE_MARKDOWN:
            return {
                output: action.output
            }
        case TOGGLE_EDITOR:
            return {
                ...state,
                toggleEditor: true,
                togglePreviewer: false
            }
        case TOGGLE_PREVIEWER:
            return {
                ...state,
                toggleEditor: false,
                togglePreviewer: true
            }
        case RESET_VIEW:
            return {
                ...state,
                toggleEditor: true,
                togglePreviewer: true
            }
        default:
            return state;
    }
}

export default parsemdReducer;