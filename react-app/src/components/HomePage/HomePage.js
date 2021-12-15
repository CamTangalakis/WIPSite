import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../store/project'
import './homePage.css'

const HomePage = () => {
    const dispatch = useDispatch()
    const User = useSelector(state => state.session.user)

    dispatch(getProjects())

    return (
        <div className='homePageContainer'>
            <div className='homeHeaderContainer'>
                <h1 className='wipHeader'>everything is a work in progress...</h1>
            </div>

            <div className='userOptionsContainer'>
                {User ? (
                   <div className='userHeader'>{User.username}</div>
                ): null}
                <div className='userButtons'>
                    <button type='button' className='userButton'>Make a Project</button>
                    <button type='button' className='userButton'>Search Projects</button>
                </div>
            </div>

            <div className='exploreProjectsContainer'>
                {/* for each project */}
                <h2>Project Type</h2>
                    <div>Project cards...</div>
                <h2>Project Type</h2>
                    <div>Project cards...</div>
                <h2>Project Type</h2>
                    <div>Project cards...</div>

            </div>
        </div>
    )
}

export default HomePage
