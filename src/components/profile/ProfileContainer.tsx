import {ChangeEvent} from 'react';

import {ActionsTypes, StateType} from '../../redux/store';
import {connect} from 'react-redux';
import {addPostAC, changeNewPostAC} from '../../redux/profilePage-reducer';
import {Profile} from './Profile';


let mapStateToProps=(state:StateType)=>{
    return{
        profilePage:state.profilePage,
        newPostText:state.profilePage.newPostText,
        postsData:state.profilePage.postsData
    }
}
let mapDispatchToProps=(dispatch:(action: ActionsTypes) => void)=> {
    return {
        onChangeTextareaHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeNewPostAC(e.currentTarget.value))
        },

        onClickAddPostHandler: (newPostText: string) => {
            if (newPostText.trim() === '') {
                return
            }
            dispatch(addPostAC(newPostText))
        }

    }
}


const ProfileContainer = connect (mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;