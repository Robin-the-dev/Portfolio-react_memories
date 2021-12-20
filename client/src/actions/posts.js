import * as api from '../api';

// Action Creators (Action creator is a function thar returns action.)
export const getPosts = () => async (dispatch) => {
	// needs to be enclosed by try() and catch() function
	try {
		// destructuring data
		const {data} = await api.fetchPosts();
		const action = {type: 'FETCH_ALL', payload: data};

		// should be dispatch() rather than return becuase I am using asynchronous logic using redux-thunk
		dispatch(action);
	} catch(error) {
		console.log(error.message);
	}
}

export const createPost = (newPost) => async (dispatch) => {
	try {
		const {data} = await api.createPost(newPost);
		const action = {type: 'CREATE', payload: data};

		dispatch(action);
	} catch(error) {
		console.log(error);
	}
}
