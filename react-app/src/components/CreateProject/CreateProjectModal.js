import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Modal} from '../../context/Modal'
import { makeProject } from '../../store/project';

function MakeProjectModal() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const userId = useSelector(state => state.session.user.id)
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')
    const [showModal, setShowModal] = useState(false);

    const submitProject = () => {
        dispatch(makeProject({title, categoryId, userId, tags, description}))
    }
    // title, categoryId, userId, tags, description

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='NavButton'>Start a Project</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} className='LoginModal'>
                    <form onSubmit={submitProject}>


                        
                    </form>
                </Modal>
            )}
        </>
    )
}

export default MakeProjectModal
