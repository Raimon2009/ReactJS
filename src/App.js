import './App.scss';
import Message from './Message';
import React, { useEffect, useState, useRef } from 'react';
import { AUTHOR } from './common';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Chat from './Chat';
// import { chatList } from './chatList';


function App(props) {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const getMessage = () => {
        setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
        setValue('');
        inputRef.current.focus();
    }

    useEffect(() => {
        let timeId
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
            timeId = setTimeout(() => {
                setMessageList([...messageList, { text: 'Я бот', author: AUTHOR.bot }])
            }, 1500);
        }
        return () => {
            clearInterval(timeId)
        }
    }, [messageList])
    return (
        <div>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                <h3>Сообщение</h3>
                {/* <Message message={messageList} /> - не работает ссылка на компонент. Буду признателен, если подскажете причину. */}
                {messageList.map((el, index) => (
                    <div key={index}>
                        <div>{el.text}</div>
                        <div>{el.author}</div>
                    </div>
                ))}
                <TextField value={value} onChange={handleChange} autoFocus={true} inputRef={inputRef}>
                    <div>
                        <input type="text"></input>
                    </div>
                </TextField>
                <Button onClick={getMessage} variant="contained">Отправить сообщение</Button>
            </header>
        </div>
    );
}

export default App;
