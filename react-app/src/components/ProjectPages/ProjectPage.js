import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProjects } from "../../store/project"
import CommentForm from "../Comments/CommentForm"
import './projectpage.css'

function ProjectPage() {
    const dispatch = useDispatch()
    let projectId = useParams()
    projectId = projectId.projectId - 1
    const projects = useSelector(state => state.projects.projects)
    const project = projects[projectId]
    const categories = ['baking', 'carpentry', 'ceramics', 'coding', 'cooking', 'crafts', 'gardening', 'painting', 'textile', 'woodworking', 'writing']
    const category = categories[project.categoryId - 1]
    console.log(category, '<<<----')

    const user = useSelector(state=>state.session.user)
    const [showComments, setShowComments] = useState(false)

    let comments = []
    for (let comm in project.comments) {
        comments.push(project.comments[comm].content)
    }
    console.log(comments)

    useEffect(()=>{
        const func = async() => {
            await dispatch(getProjects())
        }
        func()
    }, [dispatch])

    const albums = useSelector(state => state.albums.albums)
    const projectPics = albums.filter(img => Number(img.projectId) === Number(projectId))
    console.log(projectPics, '<--')

    const addImage = () => {
        // dispatch()
    }
    return (
        <div className='projectPageContainer'>

            <div className='projectPageHeader'>
                <h1 className='projectPageTitle'>{project.title}</h1>
                <div className='underHeaderStuff'>
                    <img src={project.user.profilePic} className='userProfilePic'/>
                    <p className='underHeaderDesc'>{project.user.username} started this {category} project on {project.createdAt.split(' ').slice(1,4).join(' ')}</p>
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
                <i className="fas fa-chevron-down"></i>
            </button>

            {showComments &&
            <div className='allComments'>
                {comments.length ? (
                    comments.map((com) => (
                        <div className='projectCommentContainer'>

                            <p className='comment'>{com}</p>
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
