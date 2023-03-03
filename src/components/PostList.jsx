import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from '../container/Posts/postslice'
import Author from './Author';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postCredit'>
              <Author userId={post.userId} />
            </p>
        </article>
    ))
  return (
    <section>
        <h1>Posts</h1>
        {renderedPosts}
    </section>
  )
}

export default PostList