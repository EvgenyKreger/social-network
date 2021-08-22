

import {StateType} from '../../redux/store';
import {connect} from 'react-redux';
import {addPost, changeNewPost, setUserProfile} from '../../redux/profilePage-reducer';
import {ProfileContainerAPI} from './ProfileContainerAPI';
import { withRouter} from 'react-router-dom';


let mapStateToProps=(state:StateType)=>{
    return{
        profilePage:state.profilePage,
        newPostText:state.profilePage.newPostText,
        postsData:state.profilePage.postsData,
        profile:state.profilePage.profile
    }
}



const ProfileContainer= connect (mapStateToProps,{changeNewPost,addPost,setUserProfile})(withRouter(ProfileContainerAPI as any));

export default ProfileContainer;