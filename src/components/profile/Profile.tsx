import React from 'react';
import {MyPost} from './myPost/MyPost';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostDataType, ProfilePageType} from '../../redux/store';


type ProfileProps = {
    profilePage:ProfilePageType
    postsData:Array<PostDataType>
    newPostText:string
    changeNewPost:(newPostText:string)=>void
    addPost:(newPostText: string)=>void

}
export function Profile(props:ProfileProps) {

    return (
        <div >
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPost {...props}/>
        </div>
    )
}