import React from 'react';

import profileInfoCss from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div >
            <img
                src="https://www.lawrencerealestateonline.com/wp-content/uploads/2018/01/cropped-Chicargo-Skyline-1600-x-400-lq.jpg"
                alt=""/>
            <div className={profileInfoCss.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}