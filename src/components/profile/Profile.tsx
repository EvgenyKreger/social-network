import React from 'react';
import {MyPost} from './myPost/MyPost';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';


type ProfileProps = {
    state: ProfilePageType
    dispatch:(action:ActionsTypes)=>void
    newPostText:string
}
export function Profile(props:ProfileProps) {

    return (
        <div >
            <ProfileInfo/>
            <MyPost state={props.state} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    )
}