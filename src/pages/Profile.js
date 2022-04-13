import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { toggleName } from "../store/profile/actions";


const Profile = () => {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
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
            <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        </div>
    );
}

export default Profile;