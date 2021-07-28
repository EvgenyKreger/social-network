
const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'


type locationType = {
    city: string
    country: string
}
export type userType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
export type usersType={
    users:Array<userType>
}

type TypeForActions= ReturnType <typeof followAC>| ReturnType <typeof unfollowAC> 

let initialState = {
    users: [
        {id: '1', followed: true, fullName: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'}},
        {id: '2', followed: true, fullName: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'}}
    ]
}
const usersReducer = (state: usersType= initialState, action:TypeForActions) => {
    switch (action.type) {
        case FOLLOW : {
            let copyState = {...state}
            copyState.users = [...state.users]
            let newUser = copyState.users.find(user => user.id ===action.id)
            if (newUser) {
                newUser.followed = true
            }
            return copyState
        }
        case UNFOLLOW : {
            let copyState = {...state}
            copyState.users = [...state.users]
            let newUser = copyState.users.find(user => user.id ===action.id )
            if (newUser) {
                newUser.followed = false
            }
            return copyState
        }
        default:
            return state
    }


}




export const followAC = (userId:string) => {
    return {
        id:userId,
        type:FOLLOW
    }as const
}
export const unfollowAC = (userId: string) => {
    return {
        id:userId,
        type:UNFOLLOW
    } as const
}
export const setUsersAC=(users:userType)=>{
    return{
        users:users,
        type:SET_USERS
    }
}


export default usersReducer;