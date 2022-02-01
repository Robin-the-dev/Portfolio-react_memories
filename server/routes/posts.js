import express from 'express';

// import controllers
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

// set up router middleware
const router = express.Router();

// add routes into router

// router.get('/', (req, res) => {
//     res.send('This is working!');
// });
// 원래는 get() 함수는 두번째 파라미터로 콜백 펑션을 받지만
// 위의 코드대로 작성을 하면 콜백 펑션내의 로직이 길어질 경우
// 가독성이 나빠지기 때문에 controllers 라는 폴더를 만들어서
// 파일을 하나 더 만들어서 로직을 담은 펑션을 적고 export 해줘서
// 현재 파일에 import 해서 아래와 같이 사용한다.

// GET method
router.get('/', getPosts);

// POST method
router.post('/', createPost);

// PATCH method
router.patch('/:id', updatePost);

// DELETE method
router.delete('/:id', deletePost);

// PATCH method to update like count
router.patch('/:id/likePost', likePost);

export default router;
