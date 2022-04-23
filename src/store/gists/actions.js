import { API_URL_PUBLIC } from "../../gists";

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";


export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
});

export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});

export const getGistsFailure = (er) => ({
    type: GET_GISTS_FAILURE,
    payload: er
});

export const getGist = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const response = await fetch(API_URL_PUBLIC);
        if (!response.ok) {
            throw new Error('Error');
        }
        const result = await response.json();
        dispatch(getGistsSuccess(result));
    }
    catch (er) {
        dispatch(getGistsFailure(er.message));
        console.error(er);
    }

};