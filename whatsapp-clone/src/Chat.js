import React from 'react';
import "./Chat.css";
import {SearchOutlined, MoreVert, AttachFile } from '@material-ui/icons';
import { Avatar, IconButton } from "@material-ui/core";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className ="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>room name</h3>
                    <p>Last seen...</p>
                </div>
                 
                <div className="chat_headerRight">
                    <IconButton />
                        <SearchOutlined />
                    <IconButton />
                    <IconButton />
                        <AttachFile />
                    <IconButton />
                    <IconButton />
                        <MoreVert />
                    <IconButton />
                </div>
            </div>

            <div className="chat_body">
                <p className = "chat_message">
                    <span className = "chat_name"> Mashfik </span>
                        this is a message 
                    <span className = "chat_timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className = "chat_message chat_receiver">
                    <span className = "chat_name"> Sazid </span>
                        this is a message 
                    <span className = "chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat_footer">
                <EmojiEmotionsIcon />
                    <form>
                        <input placeholder = "type a text message" type = "text" />
                            <button type = "submit">
                                send a message
                            </button>
                    </form>
                <MicIcon />
            </div>
        </div>
    )
}


export default Chat;