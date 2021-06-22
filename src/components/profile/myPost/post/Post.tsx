import React from 'react';

import postCss from './Post.module.css'
type MessageProps={
    message:string
    likesCount:number
}


export function Post(props:MessageProps){
    return(
        <div className={postCss.item}>
            <img src="https://topmsg.ru/wp-content/uploads/anonymous.jpg" alt="avatar"/>
            {props.message}
            <div>
               <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}