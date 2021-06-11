import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogCss from './Dialogs.module.css'

 function DialogItem(props:any){
    return(
        <div className={dialogCss.dialog}><NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink></div>
    )
 }
function Message(props:any){
    return(
        <div className={dialogCss.message}>{props.message}</div>
    )
}

 export function Dialogs() {
    return (
        <div className={dialogCss.dialogs}>
            <div className={dialogCss.dialogsItems}>
               <DialogItem name={"Дима"} id={1}/>
               <DialogItem name={"Маша"} id={2}/>
               <DialogItem name={"Лена"} id={3}/>
               <DialogItem name={"Коля"} id={4}/>
               <DialogItem name={"Денис"} id={5}/>


            </div>
            <div className={dialogCss.messagesItems}>
                <Message message={"Hello"}/>
                <Message message={"How are you"}/>
                <Message message={"It's very nice"}/>
                <Message message={"Hi"}/>
                <Message message={"All is good"}/>


            </div>

        </div>

    )
}