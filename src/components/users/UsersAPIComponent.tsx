import React from 'react';
import {usersType, userType} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';




export type UsersAPIPropsType = {
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


export class UsersAPIComponent extends React.Component<UsersAPIPropsType, Array<userType>> {

    componentDidMount() {
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${this.props.currentPage}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setCounter(response.data.totalCount);
        });
    }

    onChangeHandler = (currentPage: number) => {
        this.props.setPageNumber(currentPage);
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${currentPage}`).then(response => {
            this.props.setUser(response.data.items);
        })
    }

    render() {
        return (
            <div>

                <Users totalCounter={this.props.totalCounter}
                       sizePage={this.props.sizePage}
                       currentPage={this.props.currentPage}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       onChangeHandler={this.onChangeHandler}
                />


            </div>
        )
    }
}

