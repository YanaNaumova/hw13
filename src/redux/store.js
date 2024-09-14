import { createStore } from "redux";
import filterReducer from "../redux/reducer";

const store = createStore(filterReducer);

export default store;
