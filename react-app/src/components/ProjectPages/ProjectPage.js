import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getCategories } from "../../store/category"
import { delComment, getProjects } from "../../store/project"
import CommentForm from "../Comments/CommentForm"
import EditProjectModal from "./EditProjectModal"
import { delProject } from "../../store/project"
import EditCommentModal from "../Comments/EditCommentModal"
import './projectpage.css'

function ProjectPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    let projectId = useParams()
    projectId = projectId.projectId
    const {projects} = useSelector(state => state.projects)
    const project = projects.find(project => project.id == projectId)

    const categories = ['baking', 'carpentry', 'ceramics', 'coding', 'cooking', 'crafts', 'gardening', 'painting', 'textile', 'woodworking', 'writing']
    const category = categories[project?.categoryId - 1]

    const user = useSelector(state=>state.session.user)
    const [showComments, setShowComments] = useState(false)


    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
            await dispatch(getCategories())
        }
        func()
    }, [dispatch])

    const albums = useSelector(state => state.albums.albums)
    const projectPics = albums.filter(img => Number(img.projectId) === Number(projectId))


    const addImage = () => {
        // dispatch()
    }

    const deleteProject =() => {
        dispatch(delProject(projectId))
        history.push('/home')
    }

    const deleteComment = (id, projectId) => {
        dispatch(delComment({id, projectId}))
        history.push(`/projects/${projectId}`)
    }

    return (
        <div className='projectPageContainer'>

            <div className='projectPageHeader'>
                <h1 className='projectPageTitle'>{project.title}</h1>
                {user?.id == project.userId ? (
                        <div className='projectEditDel'>
                            <EditProjectModal project={project} />
                            <button type='button' onClick={deleteProject} className='deleteButton'>delete</button>
                        </div>
                    ): null}
                <div className='underHeaderStuff'>
                    <img src={project?.user?.profilePic} className='userProfilePic'/>
                    <p className='underHeaderDesc'>{project?.user?.username} started this {category} project on {project.createdAt?.split(' ').slice(1,4).join(' ')}</p>
                </div>
            </div>

            <p className='projectPageDescription'>{project.description}</p>
            <img src={project.coverPhoto} className='projectCoverPhoto'/>
            <div className='albumPhotosContainer'> More Photos Here</div>


            {projectPics?.map(pic => (
                <img src={pic.photo} className='photos' />
            ))}

            <form className='addImagesForm'>
                <label htmlFor='images' className='imagesLabel'>Add Images</label>
                <input
                    name='images'
                    className='imagesInput'
                />
                <button type='submit' className='imagesAdd'>Add</button>
            </form>

            <button
            type='button'
            className='commentToggleButton'
            onClick={()=>setShowComments(!showComments)} >
                Comments
                {showComments ? (
                    <i className="fas fa-chevron-up"></i>
                ): <i className="fas fa-chevron-down"></i>}
            </button>

            {showComments &&
            <div className='allComments'>
                {Object.keys(project.comments).length ? (
                    Object.keys(project.comments).map((id) => (
                        <div className='projectCommentContainer'>

                            <p className='comment'>{project.comments[id].content}</p>
                            {user.id == project.comments[id].userId ? (
                                <div>
                                    <EditCommentModal comment={project.comments[id]} projectId={project.id}/>
                                    <button type='button' onClick={() => {deleteComment(project.comments[id].id, project.id)}} >delete</button>
                                </div>
                            ) : (<p></p>)}
                        </div>
                    ))
                ): (
                    <p className='projectCommentContainer comment'>be the first to comment!</p>
                )}

                {user ? (
                    <CommentForm className='commentForm' projectId={project.id}/>
                ): null}
            </div>}


        </div>
    )
}

export default ProjectPage
