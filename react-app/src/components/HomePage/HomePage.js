import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProjects } from '../../store/project'
import './homePage.css'

const HomePage = () => {
    const dispatch = useDispatch()
    let projects = useSelector(state => state.projects)
    const userId = useSelector(state => state.session.user.id)
    projects = projects.projects
    const User = useSelector(state => state.session.user)
    console.log(projects, "<<<----")
    useEffect(()=>{
        dispatch(getProjects())
    }, [dispatch])

    return (
        <div className='homePageContainer'>
            <div className='homeHeaderContainer'>
                <h1 className='wipHeader'>everything is a work in progress...</h1>
            </div>

            <div>
                {User ? (
                <div className='userOptionsContainer'>
                    <div className='userHeader'>{User.username}</div>
                    <div className='userButtons'>
                        <NavLink to='/newProject' >Start a Project</NavLink>
                        <button type='button' className='userButton'>Search Projects</button>
                    </div>
                </div>
                ): null}
            </div>

            <div className='exploreProjectsContainer'>
                {projects?.map(project =>(
                    <div className='projectCardContainer'>
                        <div className='projectUsername'>Project Username</div>

                        <div className='projectCard'>
                            <div className='projectCardHeader'>
                                <h2>{project.title}</h2>
                                <button type='button' className='likeProject'>
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>

                            <p>{project.description}</p>

                            <div className='cardFooter'>
                                <p>#{project.tags.split(' ').join(' #')}</p>
                                {userId == project.userId ? (
                                    <NavLink to='/editProject'>Edit</NavLink>
                                ): null}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomePage
