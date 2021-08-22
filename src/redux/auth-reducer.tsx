
const SET_USER_DATA='SET_USER_DATA'

export type authType={
    id:null|number
    email: null|string
    login: null|string
    isAuth?:boolean
}
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false

}

type ActionAuthType = ReturnType<typeof setUserData>

export const authReducer = (state: authType = initialState, action:ActionAuthType) => {


    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.dataAuth,
                isAuth:true
            }

        default:
            return state

    }
}
     export const setUserData = (dataAuth:authType) => {
        return {
            type: SET_USER_DATA,
            dataAuth
        } as const
    }
