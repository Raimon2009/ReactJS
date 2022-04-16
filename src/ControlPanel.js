import React, { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { AUTHOR } from './common';


const ControlPanel = () => {
    let { chatId } = useParams();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const author = useSelector(state => state.profile.name);
    const allMessages = useSelector((state) => state.messages.messageList)
    const messages = allMessages[chatId] || [];

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const getMessage = () => {
        if (value !== "") {
            const newMessage = { text: value, author: author }
            dispatch(addMessage(chatId, newMessage));
            setValue('');
            inputRef.current.focus();
        }
    }
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            getMessage();
        }
    }

    useEffect(() => {
        let timeId
        if (messages.length > 0 && messages[messages.length - 1].author !== AUTHOR.bot) {
            const newMessage = { text: 'привет', author: AUTHOR.bot }
            timeId = setTimeout(() => {
                dispatch(addMessage(chatId, newMessage))
            }, 1500);
        }

        return () => {
            if (timeId) {
                clearInterval(timeId)
            }
        };
    }, [messages, chatId])
    return (
        <div className="chatBlock">
            <TextField value={value} onKeyPress={pressEnter} onChange={handleChange} autoFocus={true} inputRef={inputRef}>
                <div>
                    <input type="text"></input>
                </div>
            </TextField>
            <Button onClick={getMessage} variant="contained">Отправить сообщение</Button>
        </div>
    );
}



export default ControlPanel;