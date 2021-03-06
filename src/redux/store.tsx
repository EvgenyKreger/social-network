import {addPost, changeNewPost, ProfileType} from './profilePage-reducer';
import {changeNewMessageAC, changeNewMessageTextAC} from './dialogsPage-reducer';
import {sideBarAC} from './sidebar-reducer';
import {usersType} from './users-reducer';
import {authType} from './auth-reducer';


type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    message: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageText:string
}
export type ProfilePageType = {
    profile: ProfileType;
    postsData: Array<PostDataType>
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:any
    usersPage:usersType
    auth:authType
}
export type ActionsTypes =
    ReturnType<typeof changeNewPost>
    |ReturnType<typeof addPost>
    |ReturnType<typeof changeNewMessageTextAC>
    |ReturnType<typeof changeNewMessageAC>
    |ReturnType<typeof sideBarAC>

//
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (state: StateType) => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void
// }

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hello! How are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
//                 {id: 3, message: 'It\'s my first message ))', likesCount: 4},
//                 {id: 4, message: 'It\'s my first message ))', likesCount: 22}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             message: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'How are you'},
//                 {id: 3, message: 'It\'s very nice'},
//                 {id: 4, message: 'Hi'},
//                 {id: 5, message: 'All is good'}
//             ],
//             newMessageText: '',
//             dialogs: [
//                 {id: 1, name: '????????'},
//                 {id: 2, name: '????????'},
//                 {id: 3, name: '????????'},
//                 {id: 4, name: '????????'},
//                 {id: 5, name: '??????????'},
//
//             ]
//
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return {...this._state}
//     },
//     dispatch(action) {
//         this._state.profilePage =profilePageReducer(this._state.profilePage,action)
//         this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage,action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar,action)
//         this._callSubscriber(this._state)
//     }
// }
// export default store;
