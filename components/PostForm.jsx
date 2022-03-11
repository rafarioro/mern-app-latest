import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPostOrganization } from '../features/posts/postSlice'

function PostForm() {

    const [organization, setOrganization] = useState('')
    const [postType, setPostType] = useState('')
    const [postText, setPostText] = useState('')
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      dispatch(setPostOrganization({ organization, postType, postText }))
      setOrganization('')
      setPostText('')
      setPostType('')
    }

  return (
    <section className='form'>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='organization'>Organization</label>
        <input
          type='text'
          name='organization'
          id='organization'
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>

      {/* <div className='form-group'><label htmlFor='postType'>Post Type</label>
        <input type='text' name='postType' id='postType' value={postType} onChange={(e) => setPostType(e.target.value)}/>
      </div> */}

      <div className='form-group'>
      <label htmlFor='postType'>Post Type</label>
        <select onChange={(e) => setPostType(e.target.value)}>
            <option value="prayerRequest">Prayer Request</option>
            <option value="praise">Praise</option>
            <option value="testimony">Testimony</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='postText'>Text Field</label>
        <input
          type='text'
          name='postText'
          id='postText'
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <button className='btn btn-block' type='submit'>
          Add {postType}
        </button>
      </div>
    </form>
  </section>
  )
}

export default PostForm