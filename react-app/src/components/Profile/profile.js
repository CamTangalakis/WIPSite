import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProjects } from "../../store/project"
import ProjectCard from "../ProjectPages/ProjectCard"

const Profile = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const projects = useSelector(state => state.projects.projects)
    console.log(projects, '<<<<<<<<----------')
    const myProjects = projects?.filter(pro => pro.userId == userId)

    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects)
        }
        func()
    }, [dispatch])

    return (
        <div className='favPageContainer'>
            <h1>My Profile</h1>

            <div className='favProjectCards'>
                {myProjects?.map(fav => (
                    <ProjectCard project={fav.projects} />
                ))}
            </div>
        </div>
    )
}

export default Profile
