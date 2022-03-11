import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PostItem from '../components/PostItem'
import Spinner from '../components/Spinner'
import { getPosts, reset } from '../features/posts/postSlice'
import PostForm from '../components/PostForm'

function TestPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector(
      (state) => state.posts
    )
  
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
  
      if (!user) {
        navigate('/login')
      }
  
      dispatch(getPosts())
  
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if (isLoading) {
      return <Spinner />
    }


  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>

      <PostForm />

      <section className='content'>
        {posts.length > 0 ? (
          <div className='goals'>
            {posts.map((posts) => (
              <PostItem key={posts._id} post={posts} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default TestPage