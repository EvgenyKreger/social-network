import React from 'react';
import { userType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../img/users_logo.png'



export type UsersPropsType = {
    users: Array<userType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: userType[]) => void

}


export class Users extends React.Component<UsersPropsType, Array<userType>> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get(" https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUser(response.data.items);
        })
    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'ava'}/>
                        <span>{u.name}</span>
                        <div>{u.status}</div>
                        <div>{"u.location.country"}, {"u.location.city"}</div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                )

            }

        </div>

    }
}