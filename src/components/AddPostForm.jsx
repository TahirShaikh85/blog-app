import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { postAdded } from '../container/Posts/postslice';
import { selectAllUsers } from '../container/users/usersslice';

const AddPostsForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title,content,userId))
            // dispatch(postAdded({
            //     id: nanoid(),
            //     title,
            //     content
            // }))
        }
        setTitle('');
        setContent('');
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user)=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
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

                <div>
                    <label htmlFor="postAuthor">Author:</label>
                    <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                </div>

                <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
            </div>
        </section>
    )
}
export default AddPostsForm;