import {changeNewMessageAC, changeNewMessageTextAC} from './dialogsPage-reducer';
import {sideBarAC} from './sidebar-reducer';
import {profileAPI} from '../api/apiProfile';


export type ActionsTypes =
    ReturnType<typeof changeNewPost>
    | ReturnType<typeof addPost>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof sideBarAC>
    | ReturnType<typeof setUserProfile>

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileTypePhotos = {
    small: string
    large: string

}
export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfileTypePhotos
}

export type ProfilePageType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: ProfileType
}

const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'Hello! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first message bro))', likesCount: 2},
        {id: 3, message: 'It\'s my first message ))', likesCount: 4},
        {id: 4, message: 'It\'s my first message ))', likesCount: 22}
    ],
    newPostText: '',
    profile: {
        'aboutMe': 'я круто чувак 1001%',
        'contacts': {
            'facebook': 'facebook.com',
            'website': null,
            'vk': 'vk.com/dimych',
            'twitter': 'https://twitter.com/@sdf',
            'instagram': 'instagra.com/sds',
            'youtube': null,
            'github': 'github.com',
            'mainLink': null
        },
        'lookingForAJob': true,
        'lookingForAJobDescription': 'не ищу, а дурачусь',
        'fullName': 'samurai dimych',
        'userId': 2,
        'photos': {
            'small': 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            'large': 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
        }
    }

}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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

        case SET_USER_PROFILE: {
            return {...state, profile: action.data}
        }
        default:
            return state;
    }
}


export const addPost = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}
export const changeNewPost = (postText: string) => {
    return {
        type: 'CHANGE-NEW-POST',
        postText: postText
    } as const
}
export const setUserProfile = (data: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        data
    } as const
}

export const setProfile = (match: any) => {
    return (dispatch: any) => {
        let userId = match.params.userId
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))

            });
    }
}