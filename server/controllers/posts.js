import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

// implement CRUD logic here and export them as function

// CREATE
export const createPost = async (req, res) => {
	const body = req.body;
	const newPost = new PostMessage(body);

	try {
		await newPost.save();

		res.status(201).json(newPost);
	} catch(error) {
		res.status(409).json({message: error.message});
	}
}

// READ
export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		
		res.status(200).json(postMessages);
	} catch(error) {
		res.status(404).json({message: error.message});
	}
}

// UPDATE
export const updatePost = async (req, res) => {
  try {
	const id = req.params.id; // Same as `const {id} = req.params;`
	const post = req.body;

	if(!mongoose.isValidObjectId(id)) throw new Error('No post with that ID');

	const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

	res.status(200).json(updatedPost);
  } catch(error) {
	res.status(404).json({message: error.message});
  }
}
