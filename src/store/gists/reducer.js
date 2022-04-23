import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "./actions";

export const STATUS = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
};

const initialState = {
    gists: [],
    request: STATUS.IDLE,
    error: null,
    loading: false
};

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUS.REQUEST,
                loading: true
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                request: STATUS.SUCCESS,
                gists: action.payload,
                loading: false
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUS.FAILURE,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default gistsReducer;