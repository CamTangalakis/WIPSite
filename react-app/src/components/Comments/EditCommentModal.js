import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
    }

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='editButton'>edit</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <form onSubmit={editCom} className='editCommentForm'>
                        <h2>Edit Comment</h2>
                        <textarea
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                        />
                        <div className='editButtons'>
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={()=>setShowModal(false)}>Cancel</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
}

export default EditCommentModal
