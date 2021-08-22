import styleCSS from './Users.module.css';
import userPhoto from '../img/users_logo.png';
import React from 'react';
import {userType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

export type UsersPropsType = {
    users: Array<userType>
    totalCounter: number
    sizePage: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onChangeHandler: (currentPage: number) => void
}

export function Users(props: UsersPropsType) {
    let pageCounter = Math.ceil(props.totalCounter / props.sizePage)
    let page = []
    for (let i = 1; i <= pageCounter; i++) {
        page.push(i)
    }
    return <div>

        {page.map(p => <span className={props.currentPage === p ? styleCSS.selected : ''}
                             onClick={() => {
                                 props.onChangeHandler(p)
                             }}>{p}</span>)}
        {props.users.map(u => <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'ava'}/>
                </NavLink>
                <span>{u.name}</span>
                <div>{u.status}</div>
                <div>{'u.location.country'}, {'u.location.city'}</div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
                }

            </div>
        )

        }

    </div>
}