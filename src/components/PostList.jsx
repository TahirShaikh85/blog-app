import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from '../container/Posts/postslice'
import Author from './Author';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id}>
            <h3 style={{marginBottom:"1rem"}}> {post.title} </h3>
            <p style={{marginBottom:"1rem"}}> {post.content.substring(0,100)} </p>
            <p className='postCredit'>
              <Author userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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