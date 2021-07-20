import  {ChangeEvent} from 'react';
import {changeNewMessageAC, changeNewMessageTextAC} from '../../redux/dialogsPage-reducer';
import {ActionsTypes, StateType} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';


//данные пропс
let mapStateToProps = (state:StateType)=>{
    return{
        dialogsPage:state.dialogsPage,
        newMessageText:state.dialogsPage.newMessageText
    }
}
// колбэки пропс
let mapDispatchToProps=(dispatch:(action: ActionsTypes) => void)=>{
    return{
        onClickMessageHandler:(newMessageText:string) =>{
            if (newMessageText.trim() === '') {
                return
            }
            dispatch(changeNewMessageTextAC(newMessageText))
        },


        onChangeTextarea:(e: ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch(changeNewMessageAC(e.currentTarget.value))
        }
    }
}

// метод коннект для создания контейнера(обвертки) для Dialogs
const DialogsContainer =connect(mapStateToProps,mapDispatchToProps)(Dialogs);



export default DialogsContainer;