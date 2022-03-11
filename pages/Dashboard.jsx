import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import { getOrganizationPosts } from '../features/posts/postSlice'
import UserProfileLeft from '../components/UserProfileLeft'
import UserProfileCenter from '../components/UserProfileCenter'

function Dashboard() {
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

    // dispatch(getPosts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    
        <div className='ProfileRow'>
            <div className='profileColumn'>
                <UserProfileLeft userName={user.name}/>
                {/* {organization[0] ? ( <OrganizationProfileData data = {organization}  />) : (<Spinner/>)} */}
            </div>
            <div className='profileColumn'>
                <UserProfileCenter/>
                {/* {organization[0] ?  (  <OrganizationViewSelect data={organization[0]} />) : (<Spinner/>)} */}
            </div>
            <div className='profileColumn'>
                search
                trending?
                {/* <OrgProfilePostForm name={organizationName} /> */}
            </div>
        </div>
    </>
  )
}

export default Dashboard
