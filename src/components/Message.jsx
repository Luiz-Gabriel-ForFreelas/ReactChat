import React from "react";

import "./Message.css";

const Message = ({message, user, father}) => {
    if(father === "client") {
        return (
            <div id="message">
                <div className={user === "client" ? "sender" : "recipient"}>
                    <h4>{message}</h4>
                </div>
            </div>
        )
    }

    if(father === "consultant") {
        return (
            <div id="message">
                <div className={user === "consultant" ? "sender" : "recipient"}>
                    <h4>{message}</h4>
                </div>
            </div>
        )
    }
}

export default Message;