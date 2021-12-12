import express from 'express';

// set up router middleware
const router = express.Router();

// add routes into router

// GET method
router.get('/', (req, res) => {
	res.send('This is working...');
});

export default router;
