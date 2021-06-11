import React from 'react';
import {MyPost} from './myPost/MyPost';
import profileCss from './Profile.module.css'
import {ProfileInfo} from './profileInfo/ProfileInfo';

export function Profile() {
    return (
        <div >
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}