import { useState } from "react"
import { makePost } from "../../store/project"

const MakePost = ({projectId}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submitPost = async(e) => {
        // e.preventDefault()
        await dispatchEvent(makePost({title, content, projectId}))
    }

    return (
        <>
            <form onSubmit={submitPost}>
                <h1>Make a Post</h1>

                <label>Title</label>
                <input
                    type='text'
                    required='required'
                    placeholder='What have you been up to?'
                    value={title}
                    onChange={(e)=> {setTitle(e.target.value)}} />

                <textarea
                    required='required'
                    placeholder='Share your progress!'
                    value={content}
                    onChange={(e)=> {setContent(e.target.value)}} />

                <button type='submit'>
                    Update
                </button>

            </form>
        </>
    )
}


export default MakePost
