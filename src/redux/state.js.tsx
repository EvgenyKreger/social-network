type DialogsType = {
    id: number
    name: string
}
type MessageType = {
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
}
export type ProfilePageType = {
    postsData: Array<PostDataType>
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
// export type ActionAddType = {
//     type: 'ADD-POST'
//     postMessage: string
// }
// export type ActionChangeType = {
//     type: 'CHANGE-NEW-POST'
//     postText: string
// } пробразовываем в более короткую форму типизации
// export type ActionChangeType = ReturnType<typeof changeNewPostAC>
// export type ActionAddType = ReturnType<typeof addPostAC>
// } пробразовываем в более короткую форму типизации

export type ActionsTypes = ReturnType<typeof changeNewPostAC>|ReturnType<typeof addPostAC>


export const addPostAC=(postMessage: string)=> {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    }as const
}

export const changeNewPostAC =(postText: string)=> {
    return {
        type: 'CHANGE-NEW-POST',
        postText:postText
    }as const
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    //changeNewPost: (newPostText: string) => void
    //addPost: (postMessage: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}


let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello! How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
                {id: 3, message: 'It\'s my first message ))', likesCount: 4},
                {id: 4, message: 'It\'s my first message ))', likesCount: 22}
            ],
            newPostText: ''
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
    },
    _callSubscriber(state: StateType) {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return {...this._state}
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText=''
            this._callSubscriber(this._state)

        }

        if (action.type === 'CHANGE-NEW-POST') {
            this._state.profilePage.newPostText = action.postText
            this._callSubscriber(this._state)

        }

    }
}


export default store;
