// Reducer is a function that takes two parameters, state and action
const postsReducer = (posts = [], action) => {
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return posts;
		default:
			return posts;
	}
}

export default postsReducer;