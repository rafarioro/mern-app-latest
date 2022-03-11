import { useState, useEffect}  from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import OrganizationProfileItems from './OrganizationProfileItems'
import { getOrganizationPosts, reset } from '../features/posts/postSlice'
import Spinner from './Spinner'
function OrganizationViewSelect(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user } = useSelector((state) => state.auth)
    const { posts, isLoading, isError, message } = useSelector(
      (state) => state.posts
    )
  
    const name = props.data.userName
    // console.log(`OrganizationVieSelect ${posts[0].postText}`)

    const [viewOption, setViewOption] = useState('all')
    let toRender;

    useEffect(() => {
        if (isError) { console.log(message) }
        if (!user) {  navigate('/login') }

        dispatch(getOrganizationPosts({userName: name}))

        return () => {
            dispatch(reset())
        }

    }, [user, viewOption, navigate,  isError, message, name, dispatch])

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
        if(viewOption === 'prayerRequest'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "prayerRequest"){ 
                    prayerArray.push(posts[i])
                }
            }
            toRender = <OrganizationProfileItems posts = {prayerArray} /> 

        }else if(viewOption === 'testimonies'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "testimony"){ 
                    testimonyArray.push(posts[i])
                }
            }
            toRender = <OrganizationProfileItems posts = {testimonyArray}/>
        }else if(viewOption === 'praises'){
            for(let i = 0 ; i <  posts.length; i++){
                if(posts[i].postType === "praise"){ 
                    praiseArray.push(posts[i])
                }
            }
            toRender = <OrganizationProfileItems posts = {praiseArray}/>
        
        }else if(viewOption === 'all'){
            toRender = <OrganizationProfileItems posts = {posts}/>
        }
    }

    console.log(`post length ${posts.length}`)

  return (
    <div className='organizationViewSelect'>

        <ul>
            <li className='postItemSelect' onClick={handleClick} value="prayerRequest">Prayers</li>
            <li className='postItemSelect' onClick={handleClick} value="praises">Praises</li>
            <li className='postItemSelect' onClick={handleClick} value="testimonies">Testimonies</li>
            {/* <li onClick={handleClick} value="all">show all</li> */}
            
        </ul>
        <hr style={{height: 1}}/>
        <div>{toRender}</div>
    </div>
  )
}

export default OrganizationViewSelect