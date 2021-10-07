import React from 'react';
import {PostDataType, ProfilePageType} from '../../redux/store';
import {Profile} from './Profile';
import {ProfileType} from '../../redux/profilePage-reducer';


type ProfileProps = {

    profilePage: ProfilePageType
    postsData: Array<PostDataType>
    newPostText: string
    changeNewPost: (newPostText: string) => void
    addPost: (newPostText: string) => void
    setUserProfile: (data: ProfileType) => void
    match: any
    setProfile: (match: any) => void
}


export class ProfileContainerAPI extends React.Component<ProfileProps, ProfilePageType> {
    componentDidMount() {
        this.props.setProfile(this.props.match);

    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }

}