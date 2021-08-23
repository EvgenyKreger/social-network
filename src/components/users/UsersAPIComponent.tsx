import React from 'react';
import {usersType, userType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Louding} from './Louding';
import {usersAPI} from '../../api/api';


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
        usersAPI.getUsers(this.props.sizePage,this.props.currentPage)
            .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCounter(data.totalCount);
        });
    }

    onChangeHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(this.props.sizePage,this.props.currentPage)
            .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
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
