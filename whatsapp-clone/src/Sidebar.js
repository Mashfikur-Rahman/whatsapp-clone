import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SIdebarChat";


function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebar_header">
                <Avatar src = "https://avatars3.githubusercontent.com/u/54547265?s=460&u=41bd7da84d39fbaf10f91e153999f4ccf87ed03b&v=4"/>
                        <div className="sidebar_headerRight">
                            <IconButton>
                                <DonutLargeIcon />
                            </IconButton>
                            <IconButton>
                                <ChatIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
                <div className="sidebar_search">
                    <div className="sidebar_searchContainer">
                        <SearchIcon />
                        <input placeholder = "search something" type = "text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
