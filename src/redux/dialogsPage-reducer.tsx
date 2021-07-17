import {ActionsTypes, DialogsPageType, MessageType, PostDataType} from './state.js';

export const profilePagereducer=(state:DialogsPageType,action:ActionsTypes)=>{
switch (action.type) {


    case 'CHANGE-NEW-MESSAGE':
        state.newMessageText = action.messageChange
    return state

    case 'ADD-MESSAGE':
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: action.messageText,
        }
        state.message.push(newMessage)
        return state
    default:
        return state
}
}

export const changeNewMessageAC =(messageChange: string)=> {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        messageChange:messageChange
    }as const
}
export const changeNewMessageTextAC =(messageText: string)=> {
    return {
        type: 'ADD-MESSAGE',
        messageText:messageText
    }as const
}