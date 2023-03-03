import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from '../container/Posts/postslice';

const AddPostsForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title,content))
            // dispatch(postAdded({
            //     id: nanoid(),
            //     title,
            //     content
            // }))
        }
        setTitle('');
        setContent('');
    }

    return (
        <section>
            <div className="formcontainer">
            <form action="">
            <h2>Add a New Posts</h2>

                <div>
                    <label htmlFor="postTitle">Post Title: </label>
                    <input type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
                </div>

                <div>
                    <label htmlFor="postContent">PostContent: </label>
                    <textarea cols={24} rows={10} type="text" id='postContent' value={content} onChange={onContentChanged} />
                </div>

                <button type='button' onClick={onSavePostClicked}>Save Post</button>
            </form>
            </div>
        </section>
    )
}
export default AddPostsForm;