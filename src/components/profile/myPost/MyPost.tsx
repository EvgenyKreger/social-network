import React from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';
import {ProfilePageType} from '../../../redux/state.js';



type Stated= {
    stated:ProfilePageType
}

export function MyPost(props:Stated) {
let postsElement=props.stated.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} />)

   let onClickAddPost=()=>{}
    return (
        <div className={myPostCss.item}>
            <h3>My posts</h3>
            <div>
                <textarea> </textarea>
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