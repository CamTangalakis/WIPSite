import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getCategories } from "../../store/category"
import { delComment, getProjects } from "../../store/project"
import CommentForm from "../Comments/CommentForm"
import EditProjectModal from "./EditProjectModal"
import { delProject } from "../../store/project"
import EditCommentModal from "../Comments/EditCommentModal"
import MakePost from "../Posts/MakePost"
import './projectpage.css'
import { delAlbum, makeAlbum } from "../../store/album"

function ProjectPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    let projectId = useParams()
    projectId = projectId.projectId
    const {projects} = useSelector(state => state.projects)
    const project = projects?.find(project => project.id == projectId)

    const categories = ['baking', 'carpentry', 'ceramics', 'coding', 'cooking', 'crafts', 'gardening', 'painting', 'textile', 'woodworking', 'writing']
    const category = categories[project?.categoryId - 1]

    const users = useSelector(state => state.session.users)
    const user = useSelector(state=>state.session.user)
    const [showComments, setShowComments] = useState(false)
    const [showPosts, setShowPosts] = useState(false)


    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
            await dispatch(getCategories())
        }
        func()
    }, [dispatch])

    const [photoUrl, setPhotoUrl] = useState('')
    const albums = useSelector(state => state.albums.albums)
    const projectPics = albums.filter(img => +img.projectId === +projectId)

    // const addImage = (e) => {
    //     e.preventDefault()
    //     dispatch(makeAlbum({userId: user.id, projectId, photo: photoUrl}))
    // }

    // const deleteImage = (id) => {
    //     dispatch(delAlbum(id))
    //     history.push(`/projects/${projectId}`)
    // }

    const deleteProject = () => {
        dispatch(delProject(projectId))
        history.push('/home')
    }

    const deleteComment = (id, projectId) => {
        dispatch(delComment({id, projectId}))
    }

    const getUser = (id) => {
        return users?.find(user => user.id === id)
    }

    return (
        <div className='projectPageContainer'>

            <div className='projectPageHeader'>
                <h1 className='projectPageTitle'>{project?.title}</h1>
                {user?.id == project?.userId ? (
                        <div className='projectEditDel'>
                            <EditProjectModal project={project} />
                            <button type='button' onClick={deleteProject} className='deleteButton'>delete</button>
                        </div>
                    ): null}
                <div className='underHeaderStuff'>
                    <img src={project?.user?.profilePic} className='userProfilePic'/>
                    <p className='underHeaderDesc'>{project?.user?.username} started this {category} project on {project?.createdAt?.split(' ').slice(1,4).join(' ')}</p>
                </div>
            </div>

            <p className='projectPageDescription'>{project?.description}</p>
            <img src={project?.coverPhoto} className='projectCoverPhoto'/>
            {/* {projectPics.length ? (
                <div className='albumPhotosContainer'>
                    {projectPics.map(pic => (
                        <div className='photoCard'>
                            <button type="button" onClick={()=>deleteImage(pic.id)}>
                                <i className="far fa-minus-square"></i>
                            </button>
                            <img src={pic.photo} className='photos' />
                        </div>
                    ))}
                </div>
            ): null} */}

            {/* <form className='addImagesForm' onSubmit={()=> addImage()}>
                <label htmlFor='images' className='imagesLabel'>Add Images</label>
                <input
                    onChange={(e)=>setPhotoUrl(e.target.value)}
                    name='images'
                    placeholder="Add image url"
                    required='required'
                    className='imagesInput'
                    value={photoUrl}
                />
                <button type='submit' className='imagesAdd'>Add</button>
            </form> */}

            <button
                type='button'
                className="postButton"
                onClick={()=> setShowPosts(!showPosts)}>
                Add Posts
                {showPosts ? (
                    <i className="fas fa-chevron-up"></i>
                ): <i className="fas fa-chevron-down"></i>}</button>
            {showPosts && <MakePost className='addPosts' projectId={projectId}/>}

            <div className='posts'>
                <p className="postTitle">Lorem ipsum</p>
                <p className="postBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='posts'>
                <p className="postTitle">Lorem ipsum</p>
                <img src={project?.coverPhoto} className="postPhoto"/>
                <p className="postBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

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
                {Object.keys(project?.comments).length ? (
                    Object.keys(project?.comments).map((id) => (
                        <div className='projectCommentContainer'>
                            <div className='commentUser'>
                                <img className='commentUserPic' src={getUser(project?.comments[id].userId)?.profilePic} />
                                <p className='commentUsername'>{getUser(project?.comments[id].userId)?.username}</p>
                            </div>

                            <p className='comment'>{project?.comments[id].content}</p>

                            {user?.id == project?.comments[id].userId ? (
                                <div className='commentButtons'>
                                    <EditCommentModal comment={project?.comments[id]} projectId={project?.id}/>
                                    <button type='button' className='deleteButton' onClick={() => {deleteComment(project?.comments[id].id, project?.id)}} >delete</button>
                                </div>
                            ) : (<p></p>)}
                        </div>
                    ))
                ): (
                    <p className='projectCommentContainer comment'>be the first to comment!</p>
                )}

                {user ? (
                    <CommentForm className='commentForm' projectId={project?.id}/>
                ): null}
            </div>}


        </div>
    )
}

export default ProjectPage
