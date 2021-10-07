import React from 'react';
import {userType} from '../../redux/users-reducer';
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
    setCurrentPage: (currentPage: number) => void
    getUsers: (sizePage: number, currentPage: number) => void

}


export class UsersAPIComponent extends React.Component<UsersAPIPropsType, Array<userType>> {

    componentDidMount() {
        this.props.getUsers(this.props.sizePage, this.props.currentPage);
    }

    onChangeHandler = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.sizePage);
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
