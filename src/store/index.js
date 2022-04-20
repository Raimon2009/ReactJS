import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import chatsReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import profileReduce from "./profile/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const allReducer = combineReducers({
    profile: profileReduce,
    chats: chatsReducer,
    messages: messageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persReducer = persistReducer(persistConfig, allReducer);

export const store = createStore(persReducer, composeEnhancers(applyMiddleware(thunk)));


const persistor = persistStore(store);

export default persistor;