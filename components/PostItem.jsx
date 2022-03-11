import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../features/posts/postSlice'
import { GoComment } from 'react-icons/go'
import { BiLike } from 'react-icons/bi'
import TimeAgo from 'timeago-react'; 
import { TiDeleteOutline } from 'react-icons/ti'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { CgRemoveR } from 'react-icons/cg'
import CommentForm from '../components/CommentForm'

function PostItem( {post} ) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [writingComment, setWritingComment] = useState(false)

  const handleComment = () => {
    setWritingComment(true)
  }

  const handleLike = () => {
    console.log("you LIKED")
  }

  const handleDelete = () => {
    dispatch(deletePost(post._id))
  }

  const discardComment = () => {
    setWritingComment(false)
  }

  console.log(user._id)

  let firstLetter = post.userName[0]
  let newDate = new Date(post.createdAt)

  return (
    <div className='goal'  >
        {/*  */}
        <div className=' postItemImg' >{firstLetter}</div>
        <div className='postItemTop postItemName' >{post.userName}</div>
        {post.user === user._id || post.organization === user.name ?  
          (
            <button className='postDelete hide'  onClick={handleDelete} >{/*<TiDeleteOutline/>*/} x </button>
          )
          : 
          (
            <button className='postDelete hide'><HiOutlineDotsVertical/></button>
          )}
        <div className='postItemTop postItemDate' > <TimeAgo datetime={newDate}/>   {/*{new Date(post.createdAt).toLocaleString('en-US')}*/}</div>
        <div className='postText' >{post.postText}</div>
        
        <div className='commentSection'>
          <div onClick={handleComment} className='commentSectionIcon'> <GoComment /></div>
          <div onClick={handleLike}className='commentSectionIcon' ><BiLike/></div>
        </div>
            {writingComment === true ? 
            (
              <div className='commentForm'><div className='discardComment' onClick={discardComment} > <CgRemoveR/> </div>  <CommentForm />  </div>
            )
            :
            (
                <p></p>
            )}

</div>
  )
}

export default PostItem