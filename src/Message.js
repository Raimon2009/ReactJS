import { useParams } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Message = ({ chats }) => {
    let { chatId } = useParams();
    if (!chats[chatId]) return null;
    const messages = chats[chatId].messages;
    return (
        <div className='scrollBlock'>
            <Link activeClass="active" to="Messages:" spy={true} smooth={true} offset={-70} duration={50} >
                {messages.map((el, index) => (
                    <div key={index}>Messages:
                        <div>{el.text}</div>
                        <div>{el.author}</div>
                    </div>
                ))}
            </Link>
        </div>
    )
};

export default Message;


