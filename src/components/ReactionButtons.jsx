import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from '../container/Posts/postslice'

const reactionEmoji = {
    thumbsUp:'👍',
    wow:'😲',
    heart:'💖',
    rocket:'🚀',
    coffee:'☕'
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
            <button key={name} type="button" className='reactionButton'
            onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}
            style={{background:'transparent', border:'none', outline:'none', marginRight:'10px'}}
            > 
            {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div style={{marginTop:'1rem'}}>{reactionButtons}</div>
  )
}

export default ReactionButtons