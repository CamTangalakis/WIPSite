const GET_ALBUMS = 'albums/GET_ALBUMS'
const MAKE_ALBUM = 'albums/MAKE_ALBUM'
const DEL_ALBUM = 'albums/DEL_ALBUM'

export const getAlb = (albums) => ({
    type: GET_ALBUMS,
    albums
})

export const makeAlb = (content) => ({
    type: MAKE_ALBUM,
    content
})

export const delAlb = (id) => ({
    type: DEL_ALBUM,
    id
})

export const getAlbums = () => async(dispatch) => {
    const response = await fetch('/api/albums/', {
        headers: {'Content-Type': 'application/json' }
    })

    if (response.ok) {
        const albums = await response.json()
        dispatch(getAlb(albums))
        return albums
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const makeAlbum = (content) => async(dispatch) => {
    const {userId, projectId, photo} = content
    const response = await fetch('/api/albums/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId, projectId, photo})
    })
    if (response.ok) {
        const album = await response.json()
        dispatch(makeAlb(album))
        return album
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const delAlbum = (id) => async(dispatch) => {
    const response = await fetch(`/api/albums/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    const album = await response.json()
    dispatch(delAlb(id))
    return album
}

export default function AlbumsReducer(state = {albums: null}, action){
    let newState;
    switch (action.type) {
        case GET_ALBUMS:
            newState = {...state}
            const albums = {...action.albums}
            newState = {...albums}
            return newState
        case MAKE_ALBUM:
            newState = {...state}
            newState.albums.push(action.content)
            newState.albums = [...newState.albums]
            console.log(newState, action, '<<<<<<<<<<<<<<<<<<<------------')
            return newState
        case DEL_ALBUM:
            newState = {...state}
            console.log(newState.albums, '<<<<<<<<<<<<<<<<<')
            const index = newState.albums.findIndex(album => +album.id == +action.id)
            console.log(index, action.id, '<------------')
            delete newState.albums[index]
            return newState
        default:
            return state
    }
}
