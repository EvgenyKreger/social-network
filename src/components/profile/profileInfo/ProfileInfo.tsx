import React from 'react';

import profileInfoCss from './ProfileInfo.module.css'
import main from './../../img/main.jpg'
import {ProfilePageType} from '../../../redux/store';
import {Louding} from '../../users/Louding';
export type ProfileInfoProps = {
    profilePage:ProfilePageType
}
export function ProfileInfo(props:ProfileInfoProps) {
    if (!props.profilePage.profile){
        return <Louding/>

    }
    return (
        <div >
            <img src={main} alt=""/>
            <img src={props.profilePage.profile.photos.large} alt="avatar"/>
            {/*<div className={profileInfoCss.descriptionBlock}>ava+description </div>*/}
            <div>{props.profilePage.profile.fullName}</div><br/>
            <div>{props.profilePage.profile.aboutMe}</div>
            <div>{props.profilePage.profile.lookingForAJobDescription}</div>
            <div>{props.profilePage.profile.lookingForAJob}</div>
            <div>Мой ВК: {props.profilePage.profile.contacts.vk}</div>
            <div>{props.profilePage.profile.contacts.github}</div>
            <div>{props.profilePage.profile.contacts.instagram}</div>
        </div>
    )
}