import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SIdebarChat() {
    return (
        <div className = "sidebarChat">
            <Avatar />
            <div className="sidebarCHat_info">
                <h3>Person name</h3>
                <p>This is last message</p>

            </div>
        </div>
    )
}

export default SIdebarChat;
