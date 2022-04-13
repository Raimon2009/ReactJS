import { createStore } from "redux";
import profileReduce from "./profile/reducer";

const store = createStore(profileReduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;