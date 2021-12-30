import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProjects } from "../../store/project"
import ProjectCard from "../ProjectPages/ProjectCard"
import './profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const projects = useSelector(state => state.projects.projects)
    const myProjects = projects?.filter(pro => pro.userId == user.id)
    console.log(myProjects, '<<<<<<<<----------')

    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
        }
        func()
    }, [dispatch])

    return (
        <div className='profileContainer'>
            <div className="profileInfoContainer">
                <h1>My Profile</h1>
                <img src={user?.profilePic} className='profilePic'/>
                <div className="userInfoContainer">
                    <p className='userInfo'>{user?.username}</p>
                    <p className='userInfo'>{user?.email}</p>
                </div>
            </div>

            <div className="projectsContainer">
                <h1 className="projectsHeader"> My Projects </h1>
                <div className='favProjectCards'>
                    {myProjects?.map(fav => (
                        <ProjectCard project={fav} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Profile
