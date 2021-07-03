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
import { StateType} from './redux/state.js';

type AppType = {
    appState: StateType
    addPost: (postMessage: string) => void
    changeNewPost:(newPostText:string)=>void
    newPostText:string
}

function App(props: AppType) {
    return (

        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile state={props.appState.profilePage} addPost={props.addPost} changeNewPost={props.changeNewPost} newPostText={props.newPostText}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>


            </div>

        </div>

    );
}

export default App;
