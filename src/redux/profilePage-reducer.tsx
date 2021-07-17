import {ActionsTypes, PostDataType, ProfilePageType} from './state.js';


export const profilePageReducer=(state:ProfilePageType,action:ActionsTypes)=>{
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST':
            state.newPostText = action.postText
            return state
        default:
            return state
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