import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
} from '../constants/actionTypes';
import * as api from '../api/index';

// Action Creators - functions that return actions

/** Gets a list of post items */
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

/** Creates new post item */
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

/** Updates selected post item */
export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: UPDATE, payload: data });
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

/** Deletes selected post item */
export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

/** Increments the likes on selected post item by 1 */
export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		console.log(error);
	}
};
