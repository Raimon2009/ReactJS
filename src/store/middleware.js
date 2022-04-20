import { AUTHOR } from "../common";
import { addMessage, ADD_MESSAGE } from "./messages/actions";

export const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
        const newMessage = { text: 'привет, ДРУГ', author: AUTHOR.bot }
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)), 1500);
    };
    return next(action);
};

