const Router = require('express').Router;
const PostController = require('./PostController');

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts');
router.get('/posts/:id');
router.put('/posts');
router.delete('/posts/:id');

module.exports = router