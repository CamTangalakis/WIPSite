const GET_PROJECTS = 'projects/GET_PROJECTS'
const MAKE_PROJECT = 'projects/MAKE_PROJECT'
const PUT_PROJECT = 'projects/PUT_PROJECT'
const DEL_PROJECT = 'projects/DEL_PROJECT'

const MAKE_COMMENT = 'comments/MAKE_COMMENT'
const PUT_COMMENT = 'comments/PUT_COMMENT'
const DEL_COMMENT = 'comments/DEL_COMMENT'

const MAKE_POST = 'posts/MAKE_POST'
const PUT_POST = 'posts/PUT_POST'
const DEL_POST = 'posts/DEL_POST'


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


// -------------------- posts -----------------------------

export const makeP = (contents) => ({
    type: MAKE_POST,
    contents
})

export const putP = (contents) => ({
    type: PUT_POST,
    contents
})

export const delP = (contents) => ({
    type: DEL_POST,
    contents
})

export const makePost = (contents) => async(dispatch) => {
    const { content, title, projectId } = contents
    const response = await fetch(`/api/projects/${projectId}/posts/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, title, projectId })
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(makeP(post))
        return post
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const editPost = (contents) => async(dispatch) => {
    const {content, title, projectId, id} = contents
    const response = await fetch(`/api/projects/${projectId}/posts/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({content, title, projectId})
    })
    if (response.ok) {
        const post = response.json()
        dispatch(putP(contents))
        return post
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export const delPost = (contents) => async(dispatch) => {
    const {id, projectId} = contents
    const response = await fetch(`/api/projects/${projectId}/comments/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    const post = await response.json()
    dispatch(delP(contents))
    return post
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
    dispatch(delComm(contents))
    return comment
}


// ------------------ reducer ----------------------


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
            return {...state, [action.content?.id]: action.content}
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

        // case MAKE_POST:
        //     newState = {...state}
        //     return newState
        // case PUT_POST:
        //     newState = {...state}
        //     return newState
        // case DEL_POST:
        //     newState = {...state}
        //     return newState

        case MAKE_COMMENT:
            newState = {...state}
            const comment = action.contents
            index = newState.projects.findIndex(project => project.id == action.contents.projectId)
            newState.projects[index].comments[action.contents.id] = comment
            newState.projects[index].comments[action.contents.id] = {...newState.projects[index].comments[action.contents.id]}
            return newState
        case PUT_COMMENT:
            newState = {...state}
            index = newState.projects.findIndex(project => project.id == action.contents.projectId)
            newState.projects[index].comments[action.contents.id].content = action.contents.content
            return newState
        case DEL_COMMENT:
            newState = {...state}
            index = newState.projects.findIndex(project => +project.id == +action.contents.projectId)
            delete newState.projects[index].comments[action.contents.id]
            newState.projects[index].comments = {...newState.projects[index].comments}
            return newState
        default:
            return state
    }
}
