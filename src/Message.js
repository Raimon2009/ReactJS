import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';
import { AddReaction, SelfImprovement } from '@mui/icons-material';
import { AUTHOR } from "./common";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMessageByChatInFb } from './store/middleware';



const Message = () => {

    const allMessages = useSelector((state) => state.messages.messageList);
    const { name } = useSelector((state) => state.profile);
    let { chatId } = useParams();
    const dispatch = useDispatch();


    const messages = allMessages[chatId];
    const isAuthor = (author) => {
        return author === AUTHOR.bot
    }

    useEffect(() => {
        dispatch(getMessageByChatInFb(chatId))
    }, [chatId]);

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {messages?.map((el) => (
                    <div key={el.id}>Messages:
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp">{isAuthor(el.author) ? (< SelfImprovement />) : (<AddReaction />)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={isAuthor(el.author) ? AUTHOR.bot : name} secondary={
                                <>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">{el.text}</Typography>
                                </>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
            </List>
        </>
    );
};

export default Message;


