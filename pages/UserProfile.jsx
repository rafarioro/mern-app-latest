import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfileData, reset } from '../features/profile/profileSlice'
//---------------------------------------------------------------
import ProfileSidebar from '../components/ProfileSidebar'
import Spinner from '../components/Spinner';
import ProfilePostForm from '../components/ProfilePostForm'
import PostFeed from '../components/PostFeed'

function UserProfile() {

  let { profileName } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const { user } = useSelector((state) => state.auth) //logged in user

  const { profile, isError, message, isLoading } = useSelector((state) => state.profile)
//fix from profileController to return just one element *FIXED using mongoose.findOne


    useEffect(() => {
      if (isError) {
          toast.error(message)
        }
      if (!user) {  navigate('/login') }

      dispatch(getProfileData({profileName: profileName}))  //change to profile name

      return () => {
          dispatch(reset())
      }
      
  }, [user, navigate, isError, message, dispatch, profileName])



  return (
    <>
          <div className='ProfileRow'>
            <div className='profileColumn'>
                {profile ? ( <ProfileSidebar name={profileName} />) : (<Spinner/>)}
            </div>
            <div className='profileColumn'>
                {profile ?  (  <PostFeed name={profileName} />) : (<Spinner/>)}
            </div>
            <div className='profileColumn'>
                <ProfilePostForm name={profileName} />
            </div>
        </div>

    </>
  )
}

export default UserProfile