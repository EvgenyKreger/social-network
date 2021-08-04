
const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS ='SET_USERS'
const SET_TOTAL_COUNTER ='SET_TOTAL_COUNTER'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'



export type locationType = {
    city: string
    country: string
}
export type photosType = {
    small: string
    large: string
}
export type userType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: locationType
    photos:photosType
}
export type usersType={
    users:Array<userType>
    totalCounter:number,
    sizePage:number
    currentPage:number
}

export type TypeForActions = ReturnType <typeof followAC>
    | ReturnType <typeof unfollowAC>
    | ReturnType <typeof setUsersAC>
    | ReturnType <typeof setTotalCounterAC>
    | ReturnType <typeof setCurrentPageAC>
debugger
let initialState = {
    users: [],
    totalCounter:0,
    sizePage:5,
    currentPage:3
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
        case SET_USERS: {
            let copyState = {...state, users: [...state.users]}
            return {...copyState, users: action.users};
        }
            case SET_TOTAL_COUNTER: {
                let copyState = {...state, totalCounter: state.totalCounter}
                return {...copyState, totalCounter: action.totalCounter};
            }
            case SET_CURRENT_PAGE:
            let copyState={...state, currentPage:state.currentPage}
            return {...copyState,currentPage:action.currentPage};

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
       users
    } as const
}

export const setTotalCounterAC = ( totalCounter:usersType)=>{
    return{
        type:SET_TOTAL_COUNTER,
        totalCounter
    } as const
}
export const setCurrentPageAC = ( currentPage:number)=>{
    return{
        type:SET_CURRENT_PAGE,
        currentPage
    } as const
}


export default usersReducer;