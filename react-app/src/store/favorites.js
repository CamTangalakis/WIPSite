const GET_FAV = 'favorites/GET_FAV'
const MAKE_FAV = 'favorites/MAKE_FAV'
const DEL_FAV = 'favorites/DEL_FAV'

export const getFav = (favs) => ({
    type: GET_FAV,
    favs
})

export const makeFav = (content) => ({
    type: MAKE_FAV,
    content
})

export const delFav = (id) => ({
    type: DEL_FAV,
    id
})

export const getFavorites = () => async(dispatch) => {
    const response = await fetch(`/api/projects/favorites/`, {
        headers: {'Content-Type': 'application/json' }
    })

    if (response.ok) {
        const favs = await response.json()
        dispatch(getFav(favs))
        return favs
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const makeFavorite = (content) => async(dispatch) => {
    const {userId, projectId} = content
    const response = await fetch(`/api/projects/favorites/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId, projectId})
    })
    if (response.ok) {
        const fav = response.json()
        dispatch(makeFav(content))
        return fav
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const delFavorite = (id) => async(dispatch) => {
    const response = await fetch(`/api/projects/favorites/${id}/`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    const fav = response.json()
    dispatch(delFav(id))
    return fav
}

export default function FavoritesReducer(state = {favorites: null}, action){
    let newState;
    switch (action.type) {
        case GET_FAV:
            newState = {...state}
            const favs = {...action.favs}
            newState = {...favs}
            return newState
        case MAKE_FAV:
            newState = {...state}
            newState.favs.push(action.content)
            newState.favs = [...newState.favs]
            return newState
        case DEL_FAV:
            newState = {...state}
            const index = newState.favs.findIndex(fav => +fav.id == +action.id)
            newState.favs.splice(index, 1)
            newState.favs = [...newState.favs]
            return newState
        default:
            return state
    }
}
