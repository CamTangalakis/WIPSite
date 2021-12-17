import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import EditProjectForm from './EditProjectPage';

function EditProjectModal({project}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='NavLogin'>edit</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <EditProjectForm setShowModal={setShowModal} project={project} />
                </Modal>
            )}
        </>
    )
}

export default EditProjectModal
