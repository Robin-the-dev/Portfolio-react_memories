const currentIdReducer = (currentId = null, action) => {
  switch(action.type) {
	case 'SET_ID':
	  return action.payload;
	case 'SET_ID_NULL':
	  return action.payload;
	default:
	  return currentId;
  }
}

export default currentIdReducer;
