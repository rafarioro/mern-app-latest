import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiSend } from 'react-icons/fi'
function CommentForm() {
    const [comment, setComment] = useState('')

    const submitComment = (e) => {
        e.preventDefault()


        // dispatch( setComment(  ) )

        console.log(`comment submitted ${comment}`)
        setComment('')
    }

    const handleChange = (e) => {
        setComment(e.target.value)
        console.log(comment)
    }

    return (
        <form onSubmit={submitComment}>
            <label>
                <input type="text" value={comment} name="comment" onChange={handleChange}/>
            </label>
            <button type="submit" > <FiSend/> </button> 
        </form>
    )
}

export default CommentForm