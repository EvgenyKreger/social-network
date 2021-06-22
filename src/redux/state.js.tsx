type DialogsType={
    id:number
    name:string
}
type MessageType={
    id:number
    message:string
}
export type PostDataType={
    id:number
    message:string
    likesCount:number
}
export type DialogsPageType={
    message:Array<MessageType>
    dialogs:Array<DialogsType>
}
export type ProfilePageType={
    postsData:Array<PostDataType>
}
export type StateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello! How are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
            {id: 3, message: 'It\'s my first message bro))', likesCount: 2},
            {id: 4, message: 'It\'s my first message bro))', likesCount: 2}
        ]
    },
    dialogsPage: {
        message: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'It\'s very nice'},
            {id: 4, message: 'Hi'},
            {id: 5, message: 'All is good'}
        ],
        dialogs: [
            {id: 1, name: 'Дима'},
            {id: 2, name: 'Маша'},
            {id: 3, name: 'Лена'},
            {id: 4, name: 'Коля'},
            {id: 5, name: 'Денис'},

        ]
    }
}
export default state;