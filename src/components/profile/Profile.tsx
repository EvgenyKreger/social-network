import React from 'react';
import {MyPost} from './myPost/MyPost';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state.js';

type State= {
    state: ProfilePageType
    newPostText:string
    addPost:(postMessage:string)=>void
    changeNewPost:(newPostText:string)=>void
}
export function Profile(props:State) {

    return (
        <div >
            <ProfileInfo/>
            <MyPost stated={props.state} addPost={props.addPost} changeNewPost={props.changeNewPost} newPostText={props.newPostText}/>
        </div>
    )
}