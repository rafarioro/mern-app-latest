import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost, setPostOrganization } from '../features/posts/postSlice'
import { toast } from 'react-toastify'


function ProfilePostForm(props) {
  const { profile } = useSelector((state) => state.profile)
  const { user } = useSelector((state) => state.auth)
    

    const [postType, setPostType] = useState('')
    const [postText, setPostText] = useState('')
    const [comment, setComment] = useState('')
    const [textfieldValue, setTextFieldValue] = useState()
    const dispatch = useDispatch()
  
    const onSubmit = (e) => {
      e.preventDefault()
      const postedTo = profile.userName;

      if(postText === '' ){
        toast.error("Add a message body!")
      }else if(postType === '' ){
        toast.error("Select Post Type")
      }else{ 
          if(profile.isOrganization === true){
              const organization = profile.userName
              dispatch(setPostOrganization({ organization, postedTo, postType, postText }))
          }else{
              dispatch(setPost( { postedTo, postType, postText } ))
          }
          setPostText('')
          setPostType('')
        }
      }

    const handleChange = (e) => {
        setPostType(e.target.value)
    }

    console.log(postText)

  return (
    <section className='form'>
    <form onSubmit={onSubmit}>

      {/* <div className='form-group'><label htmlFor='postType'>Post Type</label>
        <input type='text' name='postType' id='postType' value={postType} onChange={(e) => setPostType(e.target.value)}/>
      </div> */}

      <div className='form-group'>



      <label htmlFor='postType'>Add a post!</label>
        <select onChange={(e) => handleChange(e) }>
            <option value="">Select Post Type</option>
            <option value="Prayer Request">Prayer Request</option>
            <option value="Praise">Praise</option>
            <option  value="Testimony">Testimony</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='postText'>Text</label>
        <textarea
            rows="8" 
            name='postText'
            id='postText'
            placeholder='Type your message here'
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          >
          </textarea>
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

export default ProfilePostForm