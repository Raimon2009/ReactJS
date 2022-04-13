import React, { useEffect, useState, useRef } from 'react';
import { AUTHOR } from './common';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const ControlPanel = ({ addMessage }) => {
    let { chatId } = useParams();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const getMessage = () => {
        if (value !== "") {
            const newMessage = { text: value, author: AUTHOR.me }
            addMessage(chatId, newMessage);
            setValue('');
            inputRef.current.focus();
        }
    }
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            getMessage();
        }
    }

    // useEffect(() => {
    //     let timeId
    //     if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
    //         timeId = setTimeout(() => {
    //             setMessageList([...messageList, { text: 'Я бот', author: AUTHOR.bot }])
    //         }, 1500);
    //     }
    //     return () => {
    //         clearInterval(timeId)
    //     }
    // }, [messageList])
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