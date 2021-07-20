import React, {ChangeEvent} from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';
import { PostDataType, ProfilePageType} from '../../../redux/store';


type myPostTypeProps= {
    profilePage:ProfilePageType
    postsData:Array<PostDataType>
    newPostText:string
    onChangeTextareaHandler:(e:ChangeEvent<HTMLTextAreaElement>)=>void
    onClickAddPostHandler:(newPostText: string)=>void


}

export function MyPost(props:myPostTypeProps) {
let postsElement=props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} />)



    return (
        <div className={myPostCss.item}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={(e)=>{props.onChangeTextareaHandler(e)}} value={props.newPostText}/>
                <div>
                    <button onClick={()=>{props.onClickAddPostHandler(props.newPostText)}} >Add post</button>
                </div>
            </div>
            <div className={myPostCss.posts}>
                {postsElement}


            </div>
        </div>
    )
}