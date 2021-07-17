import dialogCss from './Message.module.css';
import React from 'react';

type messagePropsType={
    id:number
    message:string
}
export function Message(props: messagePropsType) {

    return (
        <div className={dialogCss.item}>{props.message}
        </div>
    )
}