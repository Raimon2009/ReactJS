// import { AUTHOR } from "../../common";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES';


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

// export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
//     dispatch(addMessage(chatId, message));
//     if (message.author !== AUTHOR.BOT) {
//         const botMessage = { text: 'thunk you', author: AUTHOR.bot };
//         setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
//     }
// };

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
});