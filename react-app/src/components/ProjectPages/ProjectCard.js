import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import EditProjectModal from '../ProjectPages/EditProjectModal'
import { NavLink, useHistory } from 'react-router-dom'
import CommentForm from '../Comments/CommentForm'
import { delProject } from '../../store/project'
import EditCommentModal from '../Comments/EditCommentModal'
import './projects.css'
import { delFavorite, getFavorites, makeFavorite } from '../../store/favorites'

function ProjectCard ({project}) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const favorites = useSelector(state => state.favorites.favs)

    let comments = ['no comments yet']
    for (let comm in project?.comments) {
        if (comments[0] == 'no comments yet') comments.pop()
        comments.push(project?.comments[comm])
    }

    const projectId = project?.id

    const getCategory = (num) => {
        num -= 1
        const categories = ['baking', 'carpentry', 'ceramics', 'coding', 'cooking', 'crafting', 'gardening', 'painting', 'textile', 'woodworking', 'writing']
        return categories[num]
    }

    const checkFavs = (projectId) => {
        if (favorites.some(fav => fav.projectId == projectId) &&
            favorites.some(fav => fav.userId == user?.id)) return true
        else return false
    }

    const fav = (projectId) => {
        dispatch(makeFavorite({userId:user.id, projectId}))
    }

    const unfav = (projectId) => {
        const thisFav = favorites.filter(fav => fav.projectId == projectId)
        const id = thisFav[0].id
        dispatch(delFavorite(id))
    }

    return (
        <div className='projectCardContainer'>

            <div className='projectCard'>
                <img className='coverPhoto' src={project?.coverPhoto}></img>
                <div className='projectHeader'>
                    <NavLink to={`/projects/${project?.id}`} >
                        <a href=''>
                            <img className='projectUsername' src={project?.user?.profilePic} />
                        </a>
                    </NavLink>
                    <div>{project?.user.username} started a {getCategory(project?.categoryId)} project</div>
                </div>
                <div className='projectCardHeader'>
                    <NavLink to={`/projects/${project?.id}`} className='projectTitle'>{project?.title}</NavLink>
                    {checkFavs(project?.id) ? (
                        <button type='button' className='likeProject' onClick={()=>unfav(project?.id)}>
                            <i className="fas fa-heart heartButton fa-lg"></i>
                        </button>
                    ):(
                        <button type='button' className='likeProject' onClick={()=>fav(project?.id)}>
                            <i className="far fa-heart noHeart"></i>
                        </button>
                    )}
                </div>

                <p className='projectDescription'>{project?.description}</p>
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
                    {project?.tags ? (
                        <p className='projectTags'>#{project?.tags?.split(' ').join(' #')}</p>
                    ): <p></p>}

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
