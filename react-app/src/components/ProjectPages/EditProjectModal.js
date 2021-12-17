import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import EditProjectForm from './EditProjectPage';
import '../HomePage/homePage.css'

function EditProjectModal({project}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='editButton'>edit</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <EditProjectForm setShowModal={setShowModal} project={project} />
                </Modal>
            )}
        </>
    )
}

export default EditProjectModal
