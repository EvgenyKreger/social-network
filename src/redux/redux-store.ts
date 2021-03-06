import {applyMiddleware, combineReducers, createStore} from 'redux'
import {dialogsPageReducer} from './dialogsPage-reducer';
import {profilePageReducer} from './profilePage-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer}from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'





let reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    profilePage:profilePageReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
(window as any).store=store;
export default store;
