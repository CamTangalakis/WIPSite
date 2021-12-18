import { useDispatch, useSelector } from 'react-redux'
import EditProjectModal from '../ProjectPages/EditProjectModal'
import { NavLink } from 'react-router-dom'
import CommentForm from '../Comments/CommentForm'
import { delProject } from '../../store/project'
import EditCommentModal from '../Comments/EditCommentModal'
import './projects.css'

function ProjectCard ({project}) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    let comments = ['no comments yet']
    for (let comm in project.comments) {
        if (comments[0] == 'no comments yet') comments.pop()
        comments.push(project.comments[comm])
    }

    const projectId = project.id
    const deleteProject = () => {
        dispatch(delProject(projectId))
    }

    const findUsername = (id) => {

    }
    const getCategory = (num) => {
        num -= 1
        const categories = ['baking', 'carpentry', 'ceramics', 'coding', 'cooking', 'crafting', 'gardening', 'painting', 'textile', 'woodworking', 'writing']
        return categories[num]
    }

    return (
        <div className='projectCardContainer'>

            <div className='projectCard'>
                <img className='coverPhoto' src={project.coverPhoto}></img>
                <div className='projectHeader'>
                    <img className='projectUsername' src={project.user?.profilePic}/>
                    <div>{project.user.username} started a {getCategory(project.categoryId)} project</div>
                </div>
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


                {/* <div>
                    {comments?.map(com => (
                        <div className='comments'>
                            <p>{com.content}</p>
                            {com.userId == user.id ? (
                                <EditCommentModal comment={com} projectId={project.id}/>
                            ): null}
                        </div>
                    ))}

                    {user ? (
                        <CommentForm projectId={project.id}/>
                    ): null}
                </div> */}

                <div className='cardFooter'>
                    {project.tags ? (
                        <p className='projectTags'>#{project.tags?.split(' ').join(' #')}</p>
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
