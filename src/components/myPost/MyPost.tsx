import React from 'react';
import myPostCss from './MyPost.module.css'
import {Post} from './post/Post';

export function MyPost() {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>
            <div className={myPostCss.posts}>
                <Post message={'Hello! How are you?'} like={2}/>
                <Post message={"It's my first message bro))"} like={7} />

            </div>
        </div>
    )
}