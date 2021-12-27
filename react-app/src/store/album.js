const GET_ALBUMS = 'albums/GET_ALBUMS'


export const getAlb = (albums) => ({
    type: GET_ALBUMS,
    albums
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

export default function AlbumsReducer(state = {albums: null}, action){
    let newState;
    switch (action.type) {
        case GET_ALBUMS:
            newState = Object.assign({}, state)
            const albums = {...action.albums}
            newState = {...albums}
            return newState
        default:
            return state
    }
}
