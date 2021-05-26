import { createStore } from "redux";
import { countReducer } from "../reducers";

let store = createStore(countReducer);

export { store };
