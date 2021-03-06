import { Link, useParams } from "react-router-dom";
import { Typography, List, ListItem, ListItemAvatar, IconButton, Avatar, ListItemText, Dialog, DialogTitle, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addChatInFb, deleteChatFromFb, lookingForDb } from "./store/middleware";




const ChatList = () => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [createName, setCreateName] = useState('');
    const [, setDummy] = useState();
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleCreateName = (e) => {
        setCreateName(e.target.value);
        setDummy({});
    }
    const handleClose = () => {
        setVisible(false);
    }

    const handleAdd = () => {
        setVisible(true);
    }

    const handleSave = () => {
        dispatch(addChatInFb(createName));
        setCreateName('');
        handleClose();
    }

    const delChat = (id) => {
        dispatch(deleteChatFromFb(id));
    }
    useEffect(() => {
        dispatch(lookingForDb());
    }, [chatId]);


    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Chats
            </Typography>
            <List >
                {chats?.length > 0 ? (
                    chats.map((chat) => (
                        <Link to={`/chats/${chat.id}`} key={chat.id}>
                            <ListItem secondaryAction={<IconButton edge="end" aria-label="delete" onClick={() => delChat(chat.Id)}><DeleteIcon /></IconButton>}>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary={chat.name} />
                            </ListItem>
                        </Link>
                    ))
                ) : (
                    <div>No chats</div>
                )}
            </List>
            <Button onClick={handleAdd}>Add chat</Button>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Chat name</DialogTitle>
                <TextField value={createName} onChange={handleCreateName} />
                <Button onClick={handleSave}>Save chat</Button>
            </Dialog>
        </div >
    )
}

export default ChatList;