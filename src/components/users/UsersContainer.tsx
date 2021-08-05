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

/*
let mapDispatchToProps = (dispatch:(action:TypeForActions)=>void)=>{

    return{
        follow:(userId:string)=>{

            dispatch(followAC(userId));
        },
        unfollow:(userId:string)=>{

            dispatch(unfollowAC(userId));
        },
        setUser:(users:userType[])=>{
            dispatch(setUsersAC(users));
        },
        setCounter:(totalCounter:usersType)=>{
            dispatch(setTotalCounterAC (totalCounter));
        },
        setPageNumber:(currentPage:number)=>{
            dispatch(setCurrentPageAC (currentPage));
        },
        setIsFetching:(isFetching:boolean)=>{
            dispatch(setIsFetchingAC (isFetching));
        },
    }
}
*/
const UsersContainer: any = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalCounter,
    setCurrentPage,
    setIsFetching
})(UsersAPIComponent);

export default UsersContainer;

