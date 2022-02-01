import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../store/category'
import { getProjects } from '../../store/project'
import ProjectCard from '../ProjectPages/ProjectCard'
import './homePage.css'

const HomePage = () => {
    const dispatch = useDispatch()
    let projects = useSelector(state => state.projects)
    projects = projects.projects

    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
            await dispatch(getCategories())
        }
        func()
    }, [dispatch])

    return (
        <div className='homePageContainer'>
            <div className='homeHeaderContainer'>
                <h1 className='wipHeader' />
            </div>

            <div className='exploreProjectsContainer'>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>food</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => {
                            if (project.categoryId === 1 || project.categoryId === 5) return true
                        }).map(project =>(
                            <div>
                                <ProjectCard project={project} className='oneCard'/>

                            </div>
                        ))}
                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>diy</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => {
                            if (project.categoryId === 3 || project.categoryId === 6 || project.categoryId === 9) return true
                        }).map(project =>(
                            <div>
                                <ProjectCard project={project} className='oneCard'/>

                            </div>
                        ))}
                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>fine art</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => {
                            if (project.categoryId === 8 || project.categoryId === 11) return true
                        }).map(project =>(
                            <div>
                                <ProjectCard project={project} className='oneCard'/>

                            </div>))}
                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>large scale</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => {
                            if (project.categoryId === 2 || project.categoryId === 7 || project.categoryId === 10) return true
                        }).map(project =>(
                            <div>
                                <ProjectCard project={project} className='oneCard'/>

                            </div>
                        ))}
                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>all projects</h2>
                    <div className='projectCardsAll'>
                        {projects?.map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div>
                {/* ------------potential categories: --------------

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>for you</h2> //recommended algorithm
                    <div className='projectCardsAll'>
                        {projects?.filter(project => project.categoryId === 6).map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div>


                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>painting</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => project.categoryId === 8).map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>textiles</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => project.categoryId === 9).map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>woodworking</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => project.categoryId === 10).map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div>

                <div className='projectsContainer'>
                    <h2 className='projectContHeader'>writing</h2>
                    <div className='projectCardsAll'>
                        {projects?.filter(project => project.categoryId === 11).map(project =>(
                            <ProjectCard project={project} className='oneCard'/>
                        ))}

                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default HomePage
