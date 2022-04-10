import { Link, useParams } from "react-router-dom";
import { Typography, List, ListItem, ListItemAvatar, IconButton, Avatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const chatList = ({ chats }) => {
    // let { chatId } = useParams();
    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Chats
            </Typography>
            <List >
                {Object.keys(chats).map((chat, index) => (
                    <Link to={`/chats/${chat}`} key={index}>
                        <ListItem key={index}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }                >
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={chats[chat].name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )
}

export default chatList;