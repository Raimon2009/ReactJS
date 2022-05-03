import { AUTHOR } from "../common";
import { addMessage, ADD_MESSAGE, updateMessages } from "./messages/actions";
import { getDatabase, ref, push, onValue, set, remove } from 'firebase/database';
import appFb from "../services/firebaseConfig";
import { chatListUpdate } from "./chats/actions";


export const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
        const newMessage = { text: 'привет, ДРУГ', author: AUTHOR.bot }
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)), 1500);
    };
    return next(action);
};

export const lookingForDb = () => async (dispatch) => {
    const db = getDatabase(appFb);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map((item) => ({
            id: item,
            name: data[item].name
        }));
        dispatch(chatListUpdate(chatArr));
    });
};

export const addChatInFb = (name) => async () => {
    const db = getDatabase(appFb);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then((res) => {
        console.log('chat added', res);
    });
};

export const deleteChatFromFb = (id) => async () => {
    const db = getDatabase(appFb);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then((res) => {
        console.log('Chat deleted', res);
    });
    remove(messagesRef).then((res) => {
        console.log('Messages deleted', res);
    });
};

export const addMessageInFb = (chatId, message) => async () => {
    const db = getDatabase(appFb);
    const messagesRef = ref(db, `/messages/${chatId}`);
    const newMessagesRef = push(messagesRef);
    set(newMessagesRef, message).then((res) => {
        console.log('Message added', res);
    });
};

export const getMessageByChatInFb = (chatId) => async (dispatch) => {
    const db = getDatabase(appFb);
    const mesref = ref(db, `/messages/${chatId}`);
    onValue(mesref, (snapshot) => {
        const data = snapshot.val();
        const mes = data && Object.values(data);
        if (mes?.length > 0) {
            dispatch(updateMessages(chatId, mes));
        }
    });
}
