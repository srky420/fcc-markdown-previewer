import { PARSE_MARKDOWN, RESET_VIEW, TOGGLE_EDITOR, TOGGLE_PREVIEWER } from "../action-types/parsemdActionTypes";
import { marked } from "marked";

// Define actions
export const parseMarkdown = (input) => {
    return {
        type: PARSE_MARKDOWN,
        output: marked.parse(input)
    }
}

export const toggleEditor = () => {
    return {
        type: TOGGLE_EDITOR,
    }
}

export const togglePreviewer = () => {
    return {
        type: TOGGLE_PREVIEWER
    }
}

export const resetView = () => {
    return {
        type: RESET_VIEW
    }
}