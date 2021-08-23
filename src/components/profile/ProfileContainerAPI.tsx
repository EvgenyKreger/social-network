import React from 'react';
import {PostDataType, ProfilePageType} from '../../redux/store';
import {Profile} from './Profile';
import axios from 'axios';
import {ProfileType} from '../../redux/profilePage-reducer';
import {profileAPI} from '../../api/api';



type ProfileProps = {

    profilePage: ProfilePageType
    postsData: Array<PostDataType>
    newPostText: string
    changeNewPost: (newPostText: string) => void
    addPost: (newPostText: string) => void
    setUserProfile:(data:ProfileType)=>void
    match:any
}



export class ProfileContainerAPI extends React.Component<ProfileProps, ProfilePageType> {
    componentDidMount() {

let userId = this.props.match.params.userId
profileAPI.getProfile(userId)
    .then(data => {
            this.props.setUserProfile(data)
            }
        )
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }

}