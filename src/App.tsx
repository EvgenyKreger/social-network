import React from 'react';
import './App.css';

import {Navbar} from './components/navbar/Navbar';
import {Route} from 'react-router-dom'
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';


function App() {
    return (

        <div className="app-wrapper">

            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
