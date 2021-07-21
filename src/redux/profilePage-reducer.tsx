import {ActionsTypes, PostDataType, ProfilePageType} from './store';

let initialState={
    postsData: [
        {id: 1, message: 'Hello! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
        {id: 3, message: 'It\'s my first message ))', likesCount: 4},
        {id: 4, message: 'It\'s my first message ))', likesCount: 22}
    ],
    newPostText: ''
}
export const profilePageReducer=(state:ProfilePageType=initialState,action:ActionsTypes)=>{
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''

            return stateCopy;
        }

        case 'CHANGE-NEW-POST': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.postText
            return stateCopy;
        }
        default:
            return state;
    }
}
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