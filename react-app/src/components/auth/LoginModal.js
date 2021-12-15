import React, {useState} from 'react'
import {Modal} from '../../context/Modal'
import LoginForm from './LoginForm'
import '../NavBar/navbar.css'

function LoginModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type='button' onClick={() => {setShowModal(true)}} className='NavButton'>Log In</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default LoginModal
