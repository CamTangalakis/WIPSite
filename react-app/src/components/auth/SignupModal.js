import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import SignUpForm from './SignUpForm'
import '../NavBar/navbar.css'

function SignupModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='NavButton'>Sign Up</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default SignupModal;
