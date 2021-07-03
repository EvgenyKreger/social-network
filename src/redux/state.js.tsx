

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
    newPostText:string
}
export type StateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}
export  type StoreType ={
    _state:StateType
    _rerenderEntireTree:()=>void
    changeNewPost:(newPostText:string)=>void
    addPost:(postMessage:string)=>void
    subscribe:(observer:()=>void)=>void
    getState:()=>StateType
}


let store:StoreType={
    _state : {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello! How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
                {id: 3, message: 'It\'s my first message ))', likesCount: 4},
                {id: 4, message: 'It\'s my first message ))', likesCount: 22}
            ],
            newPostText:''
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
    _rerenderEntireTree(){
        console.log('state changed')
    },

    changeNewPost(newPostText:string){
        this._state.profilePage.newPostText=newPostText
        this._rerenderEntireTree()
        this._state.profilePage.newPostText=''
    },


    subscribe(observer){
        this._rerenderEntireTree=observer
    },
    getState(){
        return this._state
    },
    dispatch(action){
        if (action==='ADD-POST'){
            addPost(postMessage:string){
                const newPost:PostDataType = {
                    id: 5,
                    message:postMessage,
                    likesCount: 0};
                this._state.profilePage.postsData.push(newPost);
                this._rerenderEntireTree()
            }
        }





    }

}








export default store;