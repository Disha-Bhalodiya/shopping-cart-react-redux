import { legacy_createStore as createStore } from "redux"
import rootred from "./Reducer/Index"

const store = createStore(
    rootred
);

export default store;