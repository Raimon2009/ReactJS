import { combineReducers, createStore } from "redux";
import chatsReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import profileReduce from "./profile/reducer";

const allReducer = combineReducers({
    profile: profileReduce,
    chats: chatsReducer,
    message: messageReducer
});

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;