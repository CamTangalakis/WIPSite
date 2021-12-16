const GET_CATEGORIES = 'categories/GET_CATEGORIES'


export const getCats = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const getCategories = () => async(dispatch) => {
    const response = await fetch('api/categories/', {
        headers: {'Content-Type': 'application/json' }
    })

    if (response.ok) {
        const categories = await response.json()
        dispatch(getCats(categories))
        return categories
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred.'];
    }
}

export default function CategoriesReducer(state = {categories: null}, action){
    let newState;
    switch (action.type) {
        case GET_CATEGORIES:
            newState = Object.assign({}, state)
            const categories = {...action.categories}
            newState = {...categories}
            return newState
        default:
            return state
    }
}
