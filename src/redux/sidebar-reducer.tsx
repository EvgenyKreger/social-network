import {ActionsTypes} from './store';

let initialState={};
export const sidebarReducer=(state=initialState, action:ActionsTypes)=>{

    return state
}
export const sideBarAC=()=> {
    return {
        type: 'SIDE-BAR'
    }as const
}