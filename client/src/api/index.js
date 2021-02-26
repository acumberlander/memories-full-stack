import axios from 'axios';

const API = axios.create({
	baseURL: 'https://ac-memories-project.herokuapp.com',
	// baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}

	return req;
});

/** API Call: Gets a list of post items */
export const fetchPosts = () => API.get('/posts');

/** API Call: Creates new post item */
export const createPost = (newPost) => API.post('/posts', newPost);

/** API Call: Updates selected post item */
export const updatePost = (id, updatedPost) =>
	API.patch(`/posts/${id}`, updatedPost);

/** API Call: Deletes selected post item */
export const deletePost = (id) => API.delete(`/posts/${id}`);

/** API Call: Increments the likes on selected post item by 1 */
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

/** API CALL: Authenticates current user (signs them in) */
export const signIn = (formData) => API.post('/user/signin', formData);

/** API CALL: Authenticates and creates a new user */
export const signUp = (formData) => API.post('/user/signup', formData);
