import React, {ChangeEvent} from 'react';
import dialogCss from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsPageType} from '../../redux/store';


type Sate = {
    dialogsPage: DialogsPageType
    newMessageText:string
    onClickMessageHandler: (newMessageText: string) => void
    onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void


}

export function Dialogs(props: Sate) {
    let newDialogs = props.dialogsPage.dialogs.map(t => <DialogItem name={t.name} id={t.id}/>)
    let newMessages = props.dialogsPage.message.map(t => <Message message={t.message} id={t.id}/>)


    return (
        <div className={dialogCss.dialogs}>
            <div>
                {newDialogs}
            </div>
            <div>
                {newMessages}
                <textarea placeholder={'enter your message'}
                          onChange={(e) =>
                          {props.onChangeTextarea(e)}}
                          value={props.newMessageText}> </textarea>
                <div>
                    <button onClick={() => {props.onClickMessageHandler(props.newMessageText)}}>send</button>
                </div>
            </div>
        </div>

    )
}