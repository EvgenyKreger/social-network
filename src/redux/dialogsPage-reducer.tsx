import {ActionsTypes, DialogsPageType, MessageType} from './state.js';

export const dialogsPageReducer=(state:DialogsPageType,action:ActionsTypes)=>{
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
        state.newMessageText=''
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