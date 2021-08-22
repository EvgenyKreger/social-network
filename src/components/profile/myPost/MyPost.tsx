import React from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';
import { PostDataType} from '../../../redux/store';


type myPostTypeProps= {

    postsData:Array<PostDataType>
    newPostText:string
    changeNewPost:(newPostText:string)=>void
    addPost:(newPostText: string)=>void


}

export function MyPost(props:myPostTypeProps) {
let postsElement=props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} />)



    return (
        <div className={myPostCss.item}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={()=>{props.changeNewPost(props.newPostText)}} value={props.newPostText}/>
                <div>
                    <button onClick={()=>{props.addPost(props.newPostText)}} >Add post</button>
                </div>
            </div>
            <div className={myPostCss.posts}>
                {postsElement}


            </div>
        </div>
    )
}