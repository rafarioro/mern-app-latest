import React from 'react'
import PostItem from './PostItem'

function PostItems(props) {

    const posts = props.posts

    console.log(`organizationProfileITems ${posts[0]}`)



  return (
    <>
        <section className='content'>
            {posts && posts.length > 0 ? (
                <div className='goals'>
                    {posts.map((post) => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            ) : 
            (
                <h5>no items to display</h5>
            )}
        </section>
    </>
  )
}

export default PostItems;