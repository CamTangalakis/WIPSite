import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {makeComment} from '../../store/project'
import './comments.css'

function CommentForm({projectId}) {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user?.id)
    const [content, setComment] = useState('')

    const makeComm = (e) => {
        e.preventDefault()
        dispatch(makeComment({content, projectId, userId}))
        setComment('')
    }

    return (
        <form onSubmit={makeComm} className='commentContainer'>
            <textarea
                onChange={(e)=>setComment(e.target.value)}
                required="required"
                name='content'
                value={content}
                className='commentInput'
            />
            <button type="submit" className='commentButton'>Comment</button>

        </form>
    )
}
export default CommentForm
