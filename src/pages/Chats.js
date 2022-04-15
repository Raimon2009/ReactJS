import Message from "../Message";
import ControlPanel from "../ControlPanel";
import ChatList from "../ChatList";

const Chats = () => {
    return (
        <div className='blockList'>
            <ChatList />
            <div>
                <Message />
                <ControlPanel />
            </div>
        </div>
    );
}
export default Chats;