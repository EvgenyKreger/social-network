import React, {ChangeEvent} from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';
import {ActionsTypes, addPostAC, changeNewPostAC, ProfilePageType} from '../../../redux/state.js';


type myPostTypeProps= {
    state:ProfilePageType
    newPostText:string
    dispatch:(action:ActionsTypes)=>void


}

export function MyPost(props:myPostTypeProps) {
let postsElement=props.state.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} />)



    let onClickAddPost=()=> {
            if(props.newPostText.trim()===''){
                return
            }
            //props.dispatch({type: 'ADD-POST',postMessage: props.newPostText}) переносим функцию в state и импортируем обратно сюда
    props.dispatch(addPostAC(props.newPostText))


    }
//{type: 'CHANGE-NEW-POST', postText: e.currentTarget.value}переносим функцию в state и импортируем обратно сюда
let onChangeTextarea=(e:ChangeEvent<HTMLTextAreaElement>)=>{props.dispatch(changeNewPostAC(e.currentTarget.value))}

    return (
        <div className={myPostCss.item}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeTextarea} value={props.newPostText}/>
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <div className={myPostCss.posts}>
                {postsElement}


            </div>
        </div>
    )
}