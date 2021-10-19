import { createStore } from "redux";
import { contactReducer } from "./reducer";

const store = createStore(contactReducer);

export default store;