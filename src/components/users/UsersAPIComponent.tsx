import React from 'react';
import {usersType, userType} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Louding} from './Louding';


export type UsersAPIPropsType = {
    users: Array<userType>
    totalCounter: number
    sizePage: number
    isFetching: boolean
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userType[]) => void
    setTotalCounter: (totalCounter: usersType) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void

}


export class UsersAPIComponent extends React.Component<UsersAPIPropsType, Array<userType>> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${this.props.currentPage}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalCounter(response.data.totalCount);
        });
    }

    onChangeHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage);
        axios.get(` https://social-network.samuraijs.com/api/1.0/users?count=${this.props.sizePage}&page=${currentPage}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Louding/> : null}

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
