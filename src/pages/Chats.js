import Message from "../Message";
import ControlPanel from "../ControlPanel";
import ChatList from "../ChatList";

const Chats = ({ chats, addMessage }) => {
    return (
        <div className='blockList'>
            <ChatList chats={chats} />
            <div>
                <Message chats={chats} />
                <ControlPanel addMessage={addMessage} />
            </div>
        </div>
    );
}
export default Chats;