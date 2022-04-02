import './App.scss';
import Message from './Message';
import React, { useEffect, useState } from 'react';
import { AUTHOR } from './common';

function App(props) {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const getMessage = () => {
        setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
    }

    useEffect(() => {
        let timeId
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot) {
            timeId = setInterval(() => {
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
                {messageList.map(el => (
                    <div>
                        <div>{el.text}</div>
                        <div>{el.author}</div>
                    </div>))}
                <div>
                    <input type="text" value={value} onChange={handleChange}></input>
                    <button onClick={getMessage} >Отправить сообщение</button>
                </div>
            </header>
        </div>
    );
}

export default App;
