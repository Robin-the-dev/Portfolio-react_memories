import mongoose from 'mongoose';

// set schema
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: new Date()
	},
});

// set model
// 변수와 model() 함수의 첫번째 파라미터는 같게 한다.
const PostMessage = mongoose.model('PostMessage', postSchema);

// export model
export default PostMessage;
