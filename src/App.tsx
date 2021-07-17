import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom'
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {ActionsTypes, StateType} from './redux/state.js';

type AppPropsType = {
    state: StateType
    dispatch:(action:ActionsTypes)=>void
    newPostText:string
    newMessageText:string
}

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage} newMessageText={props.state.dialogsPage.newMessageText} dispatch={props.dispatch}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           state={props.state.profilePage}
                           dispatch={props.dispatch}
                           newPostText={props.state.profilePage.newPostText}
                       />}
                />
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>

        </div>

    );
}

export default App;
