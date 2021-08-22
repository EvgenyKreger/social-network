import {connect} from 'react-redux';
import {UsersAPIComponent} from './UsersAPIComponent';
import {StateType} from '../../redux/store';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCounter,
    setUsers,
    unfollow,

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
    setUsers,
    setTotalCounter,
    setCurrentPage,
    setIsFetching
})(UsersAPIComponent);

export default UsersContainer;

