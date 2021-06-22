import React from 'react';
import {MyPost} from './myPost/MyPost';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state.js';

type State= {
    state: ProfilePageType
}
export function Profile(props:State) {

    return (
        <div >
            <ProfileInfo/>
            <MyPost stated={props.state} />
        </div>
    )
}