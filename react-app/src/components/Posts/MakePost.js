import { useState } from "react"
import { useDispatch } from "react-redux"
import { makePost } from "../../store/project"
import './post.css'

const MakePost = ({projectId}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [coverPhoto, setCoverPhoto] = useState('')

    const submitPost = async(e) => {
        e.preventDefault()
        await dispatch(makePost({content, title, projectId, coverPhoto}))
    }

    return (
        <>
            <form className='postForm' onSubmit={submitPost}>
                <h3>Blog Posting Coming Soon</h3>
                <input
                    type='text'
                    required='required'
                    placeholder='Title'
                    value={title}
                    onChange={(e)=> {setTitle(e.target.value)}} />

                <input
                    type='text'
                    placeholder='Add a photo'
                    value={coverPhoto}
                    onChange={(e)=> {setCoverPhoto(e.target.value)}} />

                <textarea
                    required='required'
                    placeholder='What have you been up to?'
                    value={content}
                    onChange={(e)=> {setContent(e.target.value)}} />

                <button type='submit'>
                    Share Your Progress!
                </button>

            </form>
        </>
    )
}


export default MakePost
