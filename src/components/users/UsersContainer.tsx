
import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/store';
import {followAC, locationType, setUsersAC, TypeForActions, unfollowAC, userType} from '../../redux/users-reducer';


let mapStateToProps = (state:StateType)=>{
    return{
        users:state.usersPage.users


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
    }
}
const UsersContainer:any = connect (mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;

