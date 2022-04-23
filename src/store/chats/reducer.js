import { ADD_CHAT, DEL_CHAT } from "./actions";

const initialState = {
    chatList: [],
};


const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    },
                ],
            };
        case DEL_CHAT: {
            const newChatList = state.filter(item => item.chatId !== action.payload.chatId);
            return newChatList;
        }
        default:
            return state;
    }
};
export default chatsReducer;