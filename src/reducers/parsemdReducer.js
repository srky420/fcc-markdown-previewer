import { PARSE_MARKDOWN } from "../action-types/parsemdActionTypes";

// Define default state
const defaultState = {
    output: ''
}

// Define reducer
const parsemdReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PARSE_MARKDOWN:
            return {
                output: action.output
            }
        default:
            return state;
    }
}

export default parsemdReducer;