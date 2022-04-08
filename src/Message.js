// import React, { Fragment } from 'react';

const Message = (props) => {
    const message = props;
    return (
        <div>
            {message.map((el, index) => (
                <div key={index}>
                    <div>{el.text}</div>
                    <div>{el.author}</div>
                </div>
            ))}
        </div>
    )
}

export default Message;


