import React, { useEffect, useState } from "react";
import { Avatar } from '@material-ui/core'
import'./SidebarChat.css'

function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState('');

    // set randomness for pfp
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    // add chat room and store data on DB
    const createChat = () => {
        const roomName = prompt("Please enter new room name");

        if(roomName) {
            // utilize database
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}/>
            <div className="sidebarChatInfo">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>add new chat</h2>
        </div>
    )
}

export default SidebarChat
