import { createStore } from "redux";
import couterReducer from "./reducer/counterReducer";

const store = createStore(couterReducer);
export default store;