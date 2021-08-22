import React from 'react';
import {PostDataType, ProfilePageType} from '../../redux/store';
import {Profile} from './Profile';
import axios from 'axios';
import {ProfileType} from '../../redux/profilePage-reducer';



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
axios.get(` https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data)
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