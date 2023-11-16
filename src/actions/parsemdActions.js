import { PARSE_MARKDOWN } from "../action-types/parsemdActionTypes";
import { marked } from "marked";

// Define actions
export const parseMarkdown = (input) => {
    return {
        type: PARSE_MARKDOWN,
        output: marked.parse(input)
    }
}