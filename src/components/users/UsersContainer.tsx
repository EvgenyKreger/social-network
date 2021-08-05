
import {connect} from 'react-redux';
import { UsersAPIComponent} from './UsersAPIComponent';
import {StateType} from '../../redux/store';
import {
    followAC, setCurrentPageAC, setTotalCounterAC,
    setUsersAC,
    TypeForActions,
    unfollowAC, usersType,
    userType
} from '../../redux/users-reducer';


let mapStateToProps = (state:StateType)=>{
    return{
        users:state.usersPage.users,
        totalCounter:state.usersPage.totalCounter,
        sizePage:state.usersPage.sizePage,
        currentPage:state.usersPage.currentPage



    }
}

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
    }
}
const UsersContainer:any = connect (mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;

