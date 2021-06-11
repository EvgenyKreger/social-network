import React from 'react';
import {NavLink} from 'react-router-dom';
import navbarCss from './Navbar.module.css'

export function Navbar() {

    console.log((navbarCss));
    return (

        <nav className={navbarCss.nav}>
            <div className={navbarCss.item}>
                <NavLink to={'/profile'} activeClassName={navbarCss.activeLink}>Profile</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to={'/dialogs'} activeClassName={navbarCss.activeLink}>Messages</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to={'/news'} activeClassName={navbarCss.activeLink}>News</NavLink>
            </div>
            <div className={navbarCss.item}>
                <NavLink to={'/music'} activeClassName={navbarCss.activeLink}>Music</NavLink>
            </div>
            <div className={`${navbarCss.item} ${navbarCss.indent}`}>
                <NavLink to={'/settings'} activeClassName={navbarCss.activeLink}>Settings</NavLink>
            </div>

        </nav>
    )}