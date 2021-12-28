import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavorites } from "../../store/favorites"
import ProjectCard from "../ProjectPages/ProjectCard"
import './favorites.css'

const FavPage = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const favorites = useSelector(state => state.favorites.favs)
    const myFavs = favorites.filter(fav => fav.userId == userId)

    useEffect(()=>{
        const func = async() => {
            await dispatch(getFavorites(1))
        }
        func()
    }, [dispatch])

    return (
        <div className='favPageContainer'>
            <h1>My Favorites</h1>

            <div className='favProjectCards'>
                {myFavs?.map(fav => (
                    <ProjectCard project={fav.projects} />
                ))}
            </div>
        </div>
    )
}

export default FavPage
