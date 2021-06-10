import React from "react";
import navbarCss from './Navbar.module.css'
export function Navbar() {
  console.log((navbarCss));
    return (

        <nav className={navbarCss.nav}>
            <div className={navbarCss.item}><a href="/profile">Profile</a></div>
            <div className={navbarCss.item}><a href="/dialogs">Messages</a></div>
            <div className={navbarCss.item}><a href="/news">News</a></div>
            <div className={navbarCss.item}><a href="/music">Music</a></div>
            <div className={`${navbarCss.item} ${navbarCss.indent}`}><a href="/settings">Settings</a></div>

        </nav>
    )
}