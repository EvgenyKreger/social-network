import React, {ChangeEvent} from 'react';
import dialogCss from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {changeNewMessageAC, changeNewMessageTextAC} from '../../redux/dialogsPage-reducer';
import {ActionsTypes, DialogsPageType} from '../../redux/store';

type Sate = {
    state: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: Sate) {
    let newDialogs = props.state.dialogs.map(t => <DialogItem name={t.name} id={t.id}/>)
    let newMessages = props.state.message.map(t => <Message message={t.message} id={t.id}/>)


    const onClickMessageHandler = () => {
        if (props.newMessageText.trim()==='') {
            return
        }
        props.dispatch(changeNewMessageTextAC(props.newMessageText))

    }


    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(changeNewMessageAC(e.currentTarget.value))

    }

    return (
        <div className={dialogCss.dialogs}>
            <div>
                {newDialogs}

            </div>
            <div>
                {newMessages}
                <textarea onChange={onChangeTextarea} value={props.newMessageText} > </textarea>
                <div>
                    <button onClick={onClickMessageHandler}>send</button>
                </div>
            </div>

        </div>

    )
}