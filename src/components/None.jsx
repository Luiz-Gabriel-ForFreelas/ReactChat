import React, { useContext, useState } from "react";

import { ChatContext } from "../context/chat";

const None = () => {

    const [chatState, dispatch] = useContext(ChatContext);

    return (
        <div id="none">
            <div className="client-btn-area">
                <button onClick={() => dispatch({type: 'CHANGE_TO_CLIENT'})} className="client-btn">
                    Cliente
                </button>
            </div>
            <div className="consultant-btn-area">
                <button onClick={() => dispatch({type: 'CHANGE_TO_CONSULTANT'})} className="consultant-btn">
                    Consultor
                </button>
            </div>
        </div>
    );
};

export default None;