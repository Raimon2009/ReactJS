import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageInFb } from './store/middleware';

const ControlPanel = () => {
    let { chatId } = useParams();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const author = useSelector(state => state.profile.name);



    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const getMessage = () => {
        if (value !== "") {
            const newMessage = { text: value, author: author }
            dispatch(addMessageInFb(chatId, newMessage));
            setValue('');
            inputRef.current.focus();
        }
    }
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            getMessage();
        }
    }

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