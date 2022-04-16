import { TOGGLE_NAME } from "./actions";
import { CHANGE_NAME } from "./actions";



const initialState = {
    showName: false,
    name: 'Alex',
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default profileReduce;