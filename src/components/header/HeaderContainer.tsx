import React from 'react';
import axios from 'axios';
import {Header} from './Header';
import {StateType} from '../../redux/store';
import {connect} from 'react-redux';
import {setUserData} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(` https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />

    }
}

const mapStateToProps = (state: StateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth

    }
};
export default connect(mapStateToProps, {setUserData})(HeaderContainer);

