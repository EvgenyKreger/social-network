import React from 'react';
import {usersType, userType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../img/users_logo.png'
import styleCSS from './Users.module.css'


export type UsersPropsType = {
    users: Array<userType>
    totalCounter:number
    sizePage:number
    currentPage:number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: userType[]) => void
    setCounter:(totalCounter:usersType)=>void
    setPageNumber:(currentPage:number)=>void
}


export class Users extends React.Component<UsersPropsType, Array<userType>> {

    componentDidMount() {
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${this.props.currentPage}`).then(response => {this.props.setUser(response.data.items);this.props.setCounter(response.data.totalCount);});
}
onChangeHandler=(currentPage:number)=>{this.props.setPageNumber(currentPage);
    axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${currentPage}`).then(response => {this.props.setUser(response.data.items);
})}
    render() {
        let pageCounter = Math.ceil(this.props.totalCounter/this.props.sizePage)
        let page=[]
        for(let i=1; i<= pageCounter; i++){
            page.push(i)
        }
        return <div>
            {page.map(p=><span className={this.props.currentPage === p ? styleCSS.selected : ''}
            onClick={()=>{this.onChangeHandler(p)}}>{p}</span>)}
            {this.props.users.map(u => <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'ava'}/>
                        <span>{u.name}</span>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}, {'u.location.city'}</div>
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