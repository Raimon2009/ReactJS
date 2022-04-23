import { Link } from "react-router-dom";
import { Typography, List, ListItem, ListItemAvatar, IconButton, Avatar, ListItemText, Dialog, DialogTitle, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addChat, deleteChat } from "./store/chats/actions";




const ChatList = () => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [createName, setCreateName] = useState('');
    const [deleted,] = useState(null);
    const [, setDummy] = useState();
    const dispatch = useDispatch();

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
        dispatch(addChat(createName));
        setCreateName('');
        handleClose();
    }

    const delChat = (chatId) => {
        dispatch(deleteChat(chatId));
        return deleted;
    }

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Chats
            </Typography>
            <List >
                {chats?.length > 0 ? (
                    chats.map((chat) => (
                        <Link to={`/chats/${chat.id}`} key={chat.id}>
                            <ListItem secondaryAction={<IconButton edge="end" aria-label="delete" onClick={delChat}><DeleteIcon /></IconButton>}>
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