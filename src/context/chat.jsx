import React, { Children } from "react";

import {act, createContext, useReducer} from "react";

const STAGES = ['none', 'client', 'consultant'];

const initialState = {
    chatState: STAGES[0]
}

const chatReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_TO_CLIENT':
            return {
                ...state,
                chatState: 'client'
            }
        
        case 'CHANGE_TO_CONSULTANT':
            return{
                ...state,
                chatState: 'consultant'
            }
    }
}

export const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const value = useReducer(chatReducer, initialState)

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}