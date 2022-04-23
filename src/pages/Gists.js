import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGist } from "../store/gists/actions";
import { selectGists, selectGistsError, selectGistsloading } from "../store/gists/selectors";


const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsloading);
    const error = useSelector(selectGistsError);

    const repeadRequestGists = useCallback(async () => {
        dispatch(getGist())
    }, []);

    useEffect(() => {
        repeadRequestGists();
    }, []);

    const renderGist = useCallback((gist) => <li key={gist.id}>{gist.description || 'No description'}</li>, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
                <h2>Error</h2>
                <button onClick={repeadRequestGists}>repead request</button>
            </>
        );
    }

    return <li>{gists.map(renderGist)}</li>
};

export default Gists;

