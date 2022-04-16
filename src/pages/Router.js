import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";



const Router = () => {

    return (
        < BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats/:chatId" element={<Chats />} />
                <Route path="*" element={<Chats />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Router;