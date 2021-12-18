import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CommentForm from "../Comments/CommentForm"
import './projectpage.css'

function ProjectPage() {
    const dispatch = useDispatch()
    let projectId = useParams()
    projectId = projectId.projectId - 1
    const projects = useSelector(state => state.projects.projects)
    const project = projects[projectId]
    console.log(project, '<<<----')

    const user = useSelector(state=>state.session.user)

    let comments = []
    for (let comm in project.comments) {
        comments.push(project.comments[comm].content)
    }

    const albums = useSelector(state => state.albums.albums)
    const projectPics = albums.filter(img => Number(img.projectId) === Number(projectId))
    console.log(projectPics, '<--')

    const addImage = () => {
        // dispatch()
    }
    return (
        <div className='projectPageContainer'>
            <h1 className='projectTitle'>{project.title}</h1>
            <p className='projectDescription'>{project.description}</p>


            {projectPics?.map(pic => (
                <img src={pic.photo} className='photos' />
            ))}

            <form>
                <label htmlFor='images' className='imagesLabel'>Add Images</label>
                <input
                    name='images'
                    className='imagesInput'
                />
                <button type='submit' className='imagesAdd'>Add</button>
            </form>

            {comments.map(com => (<p className='comment'>{com}</p>))}

            {user ? (
                <CommentForm className='commentForm'/>
            ): null}

        </div>
    )
}

export default ProjectPage
