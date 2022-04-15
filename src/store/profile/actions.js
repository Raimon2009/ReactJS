export const TOGGLE_NAME = "TOGGLE_NAME";
export const CHANGE_NAME = "CHANGE_NAME";

export const toggleName = {
    type: TOGGLE_NAME,
}

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});