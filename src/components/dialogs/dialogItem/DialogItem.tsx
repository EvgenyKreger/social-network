import dialogItemCss from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type dialogItemPropsType={
    id:number
    name:string
}
export function DialogItem(props: dialogItemPropsType) {
    return (
        <div className={dialogItemCss.item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={dialogItemCss.activeLink}>{props.name}</NavLink>
        </div>
    )
}