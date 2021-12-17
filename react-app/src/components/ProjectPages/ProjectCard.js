import { useDispatch, useSelector } from 'react-redux'
import EditProjectModal from '../ProjectPages/EditProjectModal'
import { NavLink } from 'react-router-dom'
import '../HomePage/homePage.css'
import CommentForm from '../Comments/CommentForm'
import { delProject } from '../../store/project'

function ProjectCard ({project}) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let comments = ['no comments yet']
    for (let comm in project.comments) {
        if (comments[0] == 'no comments yet') comments.pop()
        comments.push(project.comments[comm].content)
    }

    const projectId = project.id
    const deleteProject = () => {
        dispatch(delProject(projectId))
    }

    const findUsername = (id) => {

    }

    return (
        <div className='projectCardContainer'>
            <img className='projectUsername' src={project.user?.profilePic}></img>

            <div className='projectCard'>
                <div className='projectCardHeader'>
                    <NavLink to={`/projects/${project.id}`} className='projectTitle'>{project.title}</NavLink>
                    <button type='button' className='likeProject'>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>

                <p className='projectDescription'>{project.description}</p>
                {/* <p className='projectPics'>{project.photos?.map(pic => (
                    <img src={pic.photo}></img>
                ))}</p> */}
                <img className='coverPhoto' src={project.coverPhoto}></img>

                {comments?.map(com => (
                    <div className='comments'>
                        <p>{com}</p>
                    </div>
                ))}

                {user ? (
                    <CommentForm projectId={project.id}/>
                ): null}

                <div className='cardFooter'>
                    {project.tags ? (
                        <p>#{project.tags?.split(' ').join(' #')}</p>
                    ): <p></p>}
                    {user?.id == project.userId ? (
                        <div>
                            <EditProjectModal project={project} />
                            <button type='button' onClick={deleteProject} className='deleteButton'>delete</button>
                        </div>
                    ): null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
