import { legacy_createStore } from "redux";
import parsemdReducer from "./reducers/parsemdReducer";

// Create store
const store = legacy_createStore(parsemdReducer);

export default store;