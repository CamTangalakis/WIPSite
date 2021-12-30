import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Modal} from '../../context/Modal'
import { editComment } from '../../store/project';
import './comments.css'

function EditCommentModal({comment, projectId}) {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState(comment.content)
    const id = comment.id

    const editCom = (e) => {
        e.preventDefault()
        dispatch(editComment({content, projectId, id}))
        setShowModal(false)
    }

    return (
        <div className='editCommentContainer'>
            <button type='button' onClick={() => {setShowModal(true)}} className='editButton'>edit</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                    <form onSubmit={editCom} className='editCommentForm'>
                        <h2>Edit Comment</h2>
                        <textarea
                            value={content}
                            className='input'
                            required='required'
                            onChange={(e)=>setContent(e.target.value)}
                        />
                        <div className='editButtons'>
                            <button type='submit' className='submitButton'>Submit</button>
                            <button type='button' onClick={()=>setShowModal(false)} className='cancelButton'>Cancel</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    )
}

export default EditCommentModal
