import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'
export const fetchPosts =()=>{
    return async (dispatch,getState) => {
    const response= await jsonPlaceholder.get('/posts')
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    })
}
}

export const fetchUsers=(id)=> dispatch => {
        _fetchUsers(id,dispatch)
    }

const _fetchUsers=_.memoize (async(id,dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({
        type:'FETCH_USERS',
        payload:response.data
    })
}
)
