import React from 'react';
import { userType} from '../../redux/users-reducer';


export type UsersPropsType = {
    users: Array<userType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: userType[]) => void

}


export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUser([{
            id: '1',
            followed: false,
            fullName: 'Dim',
            status: 'I\'m BOSS',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: '2',
                followed: true,
                fullName: 'Ann',
                status: 'I\'m BOSS too',
                location: {city: 'Moscow', country: 'Russian'}
            },
            {
                id: '3',
                followed: true,
                fullName: 'Ann',
                status: 'I\'m BOSS too',
                location: {city: 'Moscow', country: 'Russian'}
            },
            {
                id: '4',
                followed: true,
                fullName: 'Ann',
                status: 'I\'m BOSS too',
                location: {city: 'Moscow', country: 'Russian'}
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <img src="https://image.flaticon.com/icons/png/128/3048/3048189.png" alt={'ava'}/>
                <span>{u.fullName}</span>
                <div>{u.status}</div>
                <div>{u.location.country}, {u.location.city}</div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}

            </div>)
        }

    </div>
}