import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CommentForm from "../Comments/CommentForm"

function ProjectPage() {
    const dispatch = useDispatch()
    let projectId = useParams()
    projectId = projectId.projectId
    const projects = useSelector(state => state.projects.projects)
    const project = projects[projectId-1]

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
            <h1>{project.title}</h1>
            <p>{project.description}</p>


            {projectPics?.map(pic => (
                <img src={pic.photo}></img>
            ))}

            <form>
                <label htmlFor='images'>Add Images</label>
                <input
                    name='images'
                />
                <button type='submit'>Add</button>
            </form>

            {comments.map(com => (<p>{com}</p>))}

            {user ? (
                <CommentForm />
            ): null}

        </div>
    )
}

export default ProjectPage
