import {ActionsTypes, DialogsPageType, MessageType} from './store';

let initialState={
    message: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'It\'s very nice'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'All is good'}
    ],
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Лена'},
        {id: 4, name: 'Коля'},
        {id: 5, name: 'Денис'},

    ]

}
export const dialogsPageReducer=(state : DialogsPageType=initialState, action:ActionsTypes)=>{
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
        messageChange:messageChange,

    }as const
}
export const changeNewMessageTextAC =(messageText: string)=> {
    return {
        type: 'ADD-MESSAGE',
        messageText:messageText
    }as const
}