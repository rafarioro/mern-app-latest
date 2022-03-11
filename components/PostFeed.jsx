import { useState, useEffect}  from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PostItems from './PostItems'
import { getProfilePosts, reset } from '../features/posts/postSlice'
import Spinner from './Spinner'
function PostFeed(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { profile } = useSelector((state) => state.profile)
    const { posts, isLoading, isError, message } = useSelector(
      (state) => state.posts
    )

    const profileName = props.name

    const [viewOption, setViewOption] = useState('all')
    let toRender;

    useEffect(() => {
        if (isError) { console.log(message) }
        if (!user) {  navigate('/login') }

        dispatch(getProfilePosts({profileName: profileName}))
        // console.log(`useEffect postFeed ${profile.userName}`)
        return () => {
            dispatch(reset())
        }

    }, [user, viewOption, navigate,  isError, message, dispatch, profileName])

    const handleClick = (event) => {
        setViewOption(event.target.getAttribute('value'))
    }

    // if (isLoading) {
    //     return <Spinner />
    //   }

    let prayerArray = []
    let praiseArray = []
    let testimonyArray = []
    if(posts && posts.length > 0){
        if(viewOption === 'Prayer Request'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "Prayer Request"){ 
                    prayerArray.push(posts[i])
                }
            }
            toRender = <PostItems posts = {prayerArray} /> 

        }else if(viewOption === 'Testimony'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "Testimony"){ 
                    testimonyArray.push(posts[i])
                }
            }
            toRender = <PostItems posts = {testimonyArray}/>
        }else if(viewOption === 'Praise'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "Praise"){ 
                    praiseArray.push(posts[i])
                }
            }
            toRender = <PostItems posts = {praiseArray}/>
        
        }else if(viewOption === 'all'){
            toRender = <PostItems posts = {posts}/>
        }
    }

    console.log(`post length ${posts.length}`)

  return (
    <div className='organizationViewSelect'>
        <h3> {profile.fullName} </h3>

        <ul>
            <li className='postItemSelect' onClick={handleClick} value="Prayer Request">Prayers</li>
            <li className='postItemSelect' onClick={handleClick} value="Praise">Praises</li>
            <li className='postItemSelect' onClick={handleClick} value="Testimony">Testimonies</li>
            {/* <li onClick={handleClick} value="all">show all</li> */}
            
        </ul>
        <hr style={{height: 1}}/>
        <div>{toRender}</div>
    </div>
  )
}

export default PostFeed