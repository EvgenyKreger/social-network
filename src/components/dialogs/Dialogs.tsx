import React from 'react';
import dialogCss from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsPageType} from '../../redux/state.js';

type Sate={
   state:DialogsPageType
}
export function Dialogs(props:Sate) {
    let newDialogs=props.state.dialogs.map(t=> <DialogItem name={t.name} id={t.id}/>)
    let newMessages=props.state.message.map(t=><Message message={t.message} id={t.id}/>)

    return (
        <div className={dialogCss.dialogs}>
            <div>
                {newDialogs}

            </div>
            <div>
                {newMessages}

            </div>

        </div>

    )
}