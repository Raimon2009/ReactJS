export const ADD_CHAT = "CHATS::ADD_CHAT";
export const CHATS_UPDATE = "CHATS::CHATS_UPDATE";

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name
});

// export const deleteChat = (chatId) => ({
//     type: DEL_CHAT,
//     payload: chatId
// });

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
})