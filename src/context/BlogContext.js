import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			const { title, content } = action.payload
			return [
				...state,
				{
					id: Math.floor(Math.random() * 999999),
					title,
					content,
				},
			]
		case 'delete_blogpost':
			return state.filter((blogpost) => blogpost.id !== action.payload)
		case 'edit_blogpost':
			return state.map((blogpost) => {
				return blogpost.id === action.payload.id ? action.payload : blogpost
			})
		case 'get_blogposts':
			return [action.payload]
		default:
			return state
	}
}

const addBlogsPost = (dispatch) => async (title, content, callback) => {
	const res = await jsonServer.post('/blogposts', { title, content })

	// dispatch({ type: 'add_blogpost', payload: { title, content } })
	if (callback) callback()
}

const deleteBlogsPost = (dispatch) => async (id) => {
	await jsonServer.delete(`/blogposts/${id}`)
	dispatch({ type: 'delete_blogpost', payload: id })
}

const editBlogsPost = (dispatch) => async (id, title, content, callback) => {
	await jsonServer.put(`/blogposts/${id}`, { title, content })
	dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
	if (callback) callback()
}

const getBlogPosts = (dispatch) => async () => {
	const res = await jsonServer.get('/blogposts')
	console.log(res.data)
	dispatch({ type: 'get_blogposts', payload: res.data })
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogsPost, deleteBlogsPost, editBlogsPost, getBlogPosts },
	[],
)
