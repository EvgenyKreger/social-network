import {connect} from 'react-redux';
import {UsersAPIComponent} from './UsersAPIComponent';
import {StateType} from '../../redux/store';
import {
    follow, getUsers,
    setCurrentPage,
    unfollow

} from '../../redux/users-reducer';


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        totalCounter: state.usersPage.totalCounter,
        sizePage: state.usersPage.sizePage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching


    }
}
const UsersContainer: any = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(UsersAPIComponent);

export default UsersContainer;

