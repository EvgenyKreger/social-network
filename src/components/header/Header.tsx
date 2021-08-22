import React from "react";
import headerCss from './Header.module.css'
import {NavLink} from 'react-router-dom';
import logo from './../img/logo.gif'
 type PropsHeaderType={
    login:string
    isAuth:boolean
}
export function Header(props:PropsHeaderType) {
    return (

        <header className={headerCss.header}>
            <img src={logo} alt="logo"/>
     <span>Welcome to network</span>
            <div className={headerCss.login}>
                {props.isAuth?<span>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}