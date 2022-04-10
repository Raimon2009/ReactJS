import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AUTHOR } from "../common";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";


const initialChats = {
    id1: {
        name: "Chat 1",
        messages: [
            { text: "Я бот 1", author: AUTHOR.bot },
            { text: "Alex", author: AUTHOR.me }
        ]
    },
    id2: {
        name: "Chat 2",
        messages: [
            { text: "Я бот 2", author: AUTHOR.bot },
            { text: "Raimon", author: AUTHOR.me }
        ]
    },
};

const Router = () => {
    const [chats, setChats] = useState(initialChats);
    const addMessage = (chatId, mes) => {
        setChats({
            ...chats,
            [chatId]: {
                name: chats[chatId].name,
                messages: [...chats[chatId].messages, mes]
            }
        });
    }


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
                <Route path="/chats/:chatId" element={<Chats chats={chats} addMessage={addMessage} />} />
                <Route path="*" element={<Chats chats={chats} />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Router;