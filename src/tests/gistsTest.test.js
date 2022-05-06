import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Gists from "../pages/Gists";
import { getGistsRequest } from "../store/gists/actions";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

it('dispatches gists', () => {
    render(
        <Provider store={mockStore} >
            <Gists />
        </Provider>
    );
    const actions = mockStore.getActios();
    const lastAction = actions[actions.length - 1];
    expect(lastAction).toEqual(getGistsRequest());
});

