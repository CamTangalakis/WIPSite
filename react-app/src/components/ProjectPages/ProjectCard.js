import { useDispatch, useSelector } from 'react-redux'
import EditProjectModal from '../ProjectPages/EditProjectModal'
import { NavLink } from 'react-router-dom'
import '../HomePage/homePage.css'
import CommentForm from '../Comments/CommentForm'
import { delProject } from '../../store/project'

function ProjectCard ({project}) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let comments = []
    for (let comm in project.comments) {
        comments.push(project.comments[comm].content)
    }

    const projectId = project.id
    const deleteProject = () => {
        dispatch(delProject(projectId))
    }

    return (
        <div className='projectCardContainer'>
            <div className='projectUsername'>{project.user?.username}</div>

            <div className='projectCard'>
                <div className='projectCardHeader'>
                    <NavLink to={`/projects/${project.id}`} className='projectTitle'>{project.title}</NavLink>
                    <button type='button' className='likeProject'>
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <p className='projectDescription'>{project.description}</p>
                <p className='projectPics'>{project.photos?.map(pic => (
                    <img src={pic.photo}></img>
                ))}</p>

                <div className='cardFooter'>
                    <p>#{project.tags?.split(' ').join(' #')}</p>
                    {user?.id == project.userId ? (
                        <div>
                            <EditProjectModal project={project}/>
                            <button type='button' onClick={deleteProject}>delete</button>
                        </div>
                    ): null}
                </div>

                {comments?.map(com => (<p>{com}</p>))}

                {user ? (
                    <CommentForm projectId={project.id}/>
                ): null}
            </div>
        </div>
    )
}

export default ProjectCard
