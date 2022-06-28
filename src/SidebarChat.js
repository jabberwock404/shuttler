import React, { useEffect, useState } from "react";
import { Avatar } from '@material-ui/core'
import'./SidebarChat.css'

function SidebarChat() {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div>
            <Avatar src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}/>
            <div className="sidebarChatInfo">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
