import { useSelector } from 'react-redux'
import EditProjectModal from '../ProjectPages/EditProjectModal'
import { NavLink } from 'react-router-dom'
import '../HomePage/homePage.css'
import CommentForm from '../Comments/CommentForm'

function ProjectCard ({project}) {
    const user = useSelector(state => state.session.user)
    // console.log(project.comments, '<---')

    return (
        <div className='projectCardContainer'>
            <div className='projectUsername'>Project Username</div>

            <div className='projectCard'>
                <div className='projectCardHeader'>
                    <NavLink to={`/projects/${project.id}`} className='projectTitle'>{project.title}</NavLink>
                    <button type='button' className='likeProject'>
                        <i class="fas fa-heart"></i>
                    </button>
                </div>

                <p className='projectDescription'>{project.description}</p>
                <p className='projectPics'>{project.photos.map(pic => (
                    <img src={pic.photo}></img>
                ))}</p>

                <div className='cardFooter'>
                    <p>#{project.tags.split(' ').join(' #')}</p>
                    {user?.id == project.userId ? (
                        <EditProjectModal project={project}/>
                    ): null}
                </div>

                {user ? (
                    <CommentForm projectId={project.id}/>
                ): null}

                <p></p>
            </div>
        </div>
    )
}

export default ProjectCard
