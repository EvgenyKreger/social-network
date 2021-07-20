import React, {ChangeEvent} from 'react';
import {MyPost} from './myPost/MyPost';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostDataType, ProfilePageType} from '../../redux/store';


type ProfileProps = {
    profilePage:ProfilePageType
    postsData:Array<PostDataType>
    newPostText:string
    onChangeTextareaHandler:(e:ChangeEvent<HTMLTextAreaElement>)=>void
    onClickAddPostHandler:(newPostText: string)=>void
}
export function Profile(props:ProfileProps) {

    return (
        <div >
            <ProfileInfo/>
            <MyPost postsData={props.postsData}
                    profilePage={props.profilePage}
                    newPostText={props.newPostText}
                    onChangeTextareaHandler={props.onChangeTextareaHandler}
                    onClickAddPostHandler={props.onClickAddPostHandler}/>
        </div>
    )
}