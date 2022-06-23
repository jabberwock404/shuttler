import React from 'react'
import './Sidebar.css'
import { Avatar } from "@material-ui/core";
import { DonutLarge } from "@material-ui/icons";
import { Chat } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarHeader">
            <Avatar />
            <div className="sidebarHeaderRight">
                <DonutLarge />
                <Chat />
                <MoreVert />
            </div>
        </div>

        <div className="sidebarSearch">

        </div>

        <div className="sidebarChats">

        </div>
        </div>
    )
}

export default Sidebar