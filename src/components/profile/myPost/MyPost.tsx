import React, {ChangeEvent, ChangeEventHandler} from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';
import {ProfilePageType} from '../../../redux/state.js';



type Stated= {
    stated:ProfilePageType
    addPost:(postMessage:string)=>void
    changeNewPost:(newPostText:string)=>void
    newPostText:string
}

export function MyPost(props:Stated) {
let postsElement=props.stated.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} />)



    let onClickAddPost=()=> {
            if(props.newPostText.trim()===''){
                return
            }
    props.addPost(props.newPostText)


    }
let onChangeTextarea=(e:ChangeEvent<HTMLTextAreaElement>)=>{props.changeNewPost(e.currentTarget.value)}

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