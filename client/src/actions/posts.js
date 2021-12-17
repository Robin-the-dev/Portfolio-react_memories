import * as api from '../api';

// Action Creators (Action creator is a function thar returns action.)
export const getPosts = () => async (dispatch) => {
	try {
		// destructuring data
		const {data} = await api.fetchPosts();
		const action = {type: 'FETCH_ALL', payload: data};

		dispatch(action);
	} catch(error) {
		console.log(error.message);
	}
}
