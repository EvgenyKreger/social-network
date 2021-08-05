const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNTER = 'SET_TOTAL_COUNTER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const IS_FETCHING = 'IS_FETCHING'


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
    photos: photosType
}
export type usersType = {
    users: Array<userType>
    totalCounter: number,
    sizePage: number
    currentPage: number
    isFetching: boolean
}

export type TypeForActions = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCounter>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setIsFetching>
debugger
let initialState = {
    users: [],
    totalCounter: 0,
    sizePage: 5,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: usersType = initialState, action: TypeForActions) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;

                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
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
            let copyState = {...state, currentPage: state.currentPage}
            return {...copyState, currentPage: action.currentPage};

        case IS_FETCHING:

            return {...state, isFetching: action.isFetching};

        default:
            return state
    }
}


export const follow = (userId: string) => {
    return {
        id: userId,
        type: FOLLOW
    } as const
}
export const unfollow = (userId: string) => {
    return {
        id: userId,
        type: UNFOLLOW
    } as const
}
export const setUsers = (users: userType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setTotalCounter = (totalCounter: usersType) => {
    return {
        type: SET_TOTAL_COUNTER,
        totalCounter
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching
    } as const
}


export default usersReducer;