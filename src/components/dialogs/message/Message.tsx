import dialogCss from './Message.module.css';
import React from 'react';

type messagePropsType={
    id:number
    message:string
}
export function Message(props: messagePropsType) {

let refMessage=React.createRef<HTMLTextAreaElement>();
   const onClickMessageHandler=()=>{
       let text=refMessage.current ? refMessage.current.value  :''
       alert(text)
   }

    return (
        <div className={dialogCss.item}>{props.message}
           <div>
               <textarea ref={refMessage}> </textarea>
              <div><button onClick={onClickMessageHandler}>send</button></div>
           </div>


        </div>
    )
}