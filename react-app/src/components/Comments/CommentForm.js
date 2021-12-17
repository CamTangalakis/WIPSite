import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {makeComment} from '../../store/project'

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
        <form onSubmit={makeComm}>
            <input
                onChange={(e)=>setComment(e.target.value)}
                name='content'
                value={content}
            />
            <button type="submit">Comment</button>

        </form>
    )
}
export default CommentForm
