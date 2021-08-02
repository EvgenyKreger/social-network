
const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'


export type locationType = {
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

export type TypeForActions = ReturnType <typeof followAC>| ReturnType <typeof unfollowAC> | ReturnType <typeof setUsersAC>

let initialState = {
    users: []
}

export const usersReducer = (state: usersType= initialState, action:TypeForActions) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.id){
                        return {...u,followed:true}
                    }
                    return u;

                })
            }

        case UNFOLLOW :
            return {
            ...state,
            users:state.users.map(u=>{
                if(u.id===action.id){
                    return {...u,followed:false}
                }
                return u;
            })
        }
        case SET_USERS:
            let copyState={...state, users:[...state.users]}

            return {...copyState,users:action.users}

        default:
            return state
    }
}




export const followAC = (userId:string) =>{
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
export const setUsersAC = ( users:userType[])=>{
    return{
        type:SET_USERS,
       users:users
    } as const


}


export default usersReducer;