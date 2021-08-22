import {combineReducers, createStore} from 'redux'
import {dialogsPageReducer} from './dialogsPage-reducer';
import {profilePageReducer} from './profilePage-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer}from './users-reducer';
import {authReducer} from './auth-reducer';





let reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    profilePage:profilePageReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers);
(window as any).store=store;
export default store;
