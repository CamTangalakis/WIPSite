const GET_PROJECTS = 'projects/GET_PROJECTS'
const MAKE_PROJECT = 'projects/MAKE_PROJECT'
const PUT_PROJECT = 'projects/PUT_PROJECT'
const DEL_PROJECT = 'projects/DEL_PROJECT'

const MAKE_COMMENT = 'comments/MAKE_COMMENT'
const PUT_COMMENT = 'comments/PUT_COMMENT'
const DEL_COMMENT = 'comments/DEL_COMMENT'

const MAKE_FAV = 'favorites/MAKE_FAV'
const DEL_FAV = 'favorites/DEL_FAV'


export const getProj = (projects) => ({
    type: GET_PROJECTS,
    projects
})

export const makeProj = (content) => ({
    type: MAKE_PROJECT,
    content
})

export const putProj = (content) => ({
    type: PUT_PROJECT,
    content
})

export const delProj = (id) => ({
    type: DEL_PROJECT,
    id
})

export const getProjects = () => async(dispatch) => {
    const response = await fetch('/api/projects/', {
        headers: {'Content-Type': 'application/json' }
    })


    if (response.ok) {
        const projects = await response.json()
        dispatch(getProj(projects))
        return projects
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const makeProject = (content) => async(dispatch) => {
    const {title, categoryId, userId, tags, description, coverPhoto} = content
    const response = await fetch('/api/projects/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ title, categoryId, userId, tags, description, coverPhoto })
    })
    if (response.ok) {
        const project = await response.json()
        dispatch(makeProj(project))
        return project
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const editProject = (content) => async(dispatch) => {
    const { title, tags, description, projectId, coverPhoto } = content
    const response = await fetch(`/api/projects/${projectId}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title, tags, description, coverPhoto
        })
    })

    if (response.ok) {
        const project = await response.json()
        dispatch(putProj(project))
        return project
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ['An error occurred.'];
      }
}

export const delProject = (id) => async(dispatch) => {
    const response = await fetch(`/api/projects/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    const project = await response.json()
    dispatch(delProj(id))
    return project
}


// ----------------- comments -------------------

export const makeComm = (contents) => ({
    type: MAKE_COMMENT,
    contents
})

export const putComm = (contents) => ({
    type: PUT_COMMENT,
    contents
})

export const delComm = (contents) => ({
    type: DEL_COMMENT,
    contents
})

export const makeComment = (contents) => async(dispatch) => {
    const { content, projectId, userId } = contents
    const response = await fetch(`/api/projects/${projectId}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, projectId, userId })
    })
    if (response.ok) {
        const comment = await response.json()
        dispatch(makeComm(comment))
        return comment
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const editComment = (contents) => async(dispatch) => {
    const {content, id, projectId} = contents
    const response = await fetch(`/api/projects/${projectId}/comments/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, projectId, id})
    })
    if (response.ok) {
        const comment = response.json()
        dispatch(putComm(contents))
        return comment
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const delComment = (contents) => async(dispatch) => {
    const {id, projectId} = contents
    const response = await fetch(`/api/projects/${projectId}/comments/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    const comment = await response.json()
    dispatch(delProj(comment))
    return comment
}


// --------------- favs ----------------------

export const makeFav = (content) => ({
    type: MAKE_FAV,
    content
})

export const delFav = (id) => ({
    type: DEL_FAV,
    id
})

export const makeFavorite = (content) => async(dispatch) => {
    const {userId, projectId} = content
    const response = await fetch(`/api/projects${projectId}/favorites/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId, projectId})
    })
    if (response.ok) {
        const fav = response.json()
        dispatch(makeFav(fav))
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

export const delFavorite = (id, projectId) => async(dispatch) => {
    const response = await fetch(`/api/projects/${projectId}/favorites/${id}/`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    const fav = response.json()
    dispatch(delFav(fav))
    return fav
}


export default function ProjectReducer(state = {projects: null}, action){
    let newState;
    let index;
    switch (action.type) {
        case GET_PROJECTS:
            newState = Object.assign({}, state)
            const projects = {...action.projects}
            newState = {...projects}
            return newState
        case MAKE_PROJECT:
            newState = Object.assign({}, state)
            return newState
        case PUT_PROJECT:
            newState = {...state}
            index = newState.projects.findIndex(project => project.id == action.content.id )
            newState.projects[index] = action.content
            return newState
        case DEL_PROJECT:
            newState = {...state}
            index = newState.projects.findIndex(project => project.id === action.id)
            newState.projects.splice(index, 1)
            return newState
        case MAKE_COMMENT:
            newState = {...state}
            const comment = action.contents
            index = newState.projects.findIndex(project=> project.id === action.contents.projectId)
            newState.projects[index].comments[action.contents.id] = comment
            return newState
        case PUT_COMMENT:
            newState = {...state}
            // console.log(newState.projects[action.contents.projectId-1].comments[action.contents.id].content, action.contents, '<<<<-------')
            newState.projects[action.contents.projectId-1].comments[action.contents.id].content = action.contents.content
            return newState
        case DEL_COMMENT:
            newState = {...state}
            delete newState.projects[action.contents.projectId-1].comments[action.contents.id]
            return newState
        default:
            return state
    }
}
