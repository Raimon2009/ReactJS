import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { changeName, toggleName } from "../store/profile/actions";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';


const Profile = () => {
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState(name);

    const setShowName = useCallback(() => {
        dispatch(toggleName);
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const saveName = () => {
        dispatch(changeName(value));
    }

    return (
        <div>
            <h2>Profile</h2>
            <button checked={showName} value={showName} onClick={setShowName}
            >Show name</button>
            <blockquote>{showName && <h3>Имя: {name}</h3>}</blockquote>
            <TextField name="name" label='name' value={value} onChange={handleInput} />
            <Button onClick={saveName}>SAVE</Button>
        </div>
    );
}

export default Profile;