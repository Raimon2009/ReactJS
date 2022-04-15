import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { changeName, toggleName } from "../store/profile/actions";
import { TextField } from "@mui/material";


const Profile = () => {
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState(name);

    const saveName = () => {
        dispatch(changeName(value));
    }

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const setShowName = useCallback(() => {
        dispatch(toggleName);
    }, [dispatch]);

    return (
        <div>
            <h2>Profile</h2>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <blockquote>{showName && <h3>Имя: {name}</h3>}</blockquote>
            <TextField label='name' value={value} onChange={handleInput} />
            <button onClick={saveName}>SAVE</button>
        </div>
    );
}

export default Profile;