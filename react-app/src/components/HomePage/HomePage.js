import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../store/project'
import MakeProjectModal from '../CreateProject/CreateProjectModal'
import './homePage.css'

const HomePage = () => {
    const dispatch = useDispatch()
    let projects = useSelector(state => state.projects)
    projects = projects.projects
    const User = useSelector(state => state.session.user)
    console.log(projects, "<<<----")

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
                        <MakeProjectModal />
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
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomePage
