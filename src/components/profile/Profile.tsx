import React from 'react';
import {MyPost} from '../myPost/MyPost';
import profileCss from './Profile.module.css'

export function Profile() {
    return (
        <div >
            <img
                src="https://www.lawrencerealestateonline.com/wp-content/uploads/2018/01/cropped-Chicargo-Skyline-1600-x-400-lq.jpg"
                alt=""/>
            <div>ava+description</div>
            <MyPost/>
        </div>
    )
}