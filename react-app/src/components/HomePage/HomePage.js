import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProjects } from '../../store/project'
import ProjectCard from '../ProjectPages/ProjectCard'
import './homePage.css'

const HomePage = () => {
    const dispatch = useDispatch()
    let projects = useSelector(state => state.projects)
    projects = projects.projects
    const User = useSelector(state => state.session.user)

    const words = ['work', 'project', 'craft', 'design', 'plan']
    let i = 0
    const increment = () => {
        setInterval(() => {
            i += 1
            if (i >= 5) i = 0
            // console.log(i)
            return i
        }, 2000, i)
    }
    increment()
    let word = words[i]

    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
        }
        func()
    }, [dispatch])

    return (
        <div className='homePageContainer'>
            <div className='homeHeaderContainer'>
                <h1 className='wipHeader'>everything is a {word} in progress...</h1>
            </div>

            <div>
                {User ? (
                <div className='userOptionsContainer'>
                    <img className='userHeader' src={User.profilePic}></img>
                    <div className='userButtons'>
                        <NavLink to='/newProject' className='startProject'>Start a Project</NavLink>
                        <button type='button' className='userButton'>Search Projects</button>
                    </div>
                </div>
                ): null}
            </div>

            <div className='exploreProjectsContainer'>
                {projects?.map(project =>(
                    <ProjectCard project={project} />
                ))}

            </div>
        </div>
    )
}

export default HomePage
