const express = require('express');
const todosController = require('../controller/todosController');

// make the router
const router = express.Router();

// make all the routes
router.get('/create-todo', todosController.todo_create_get);

router.get('/', todosController.todo_index);

router.post('/', todosController.todo_create_todo);

router.delete('/:id', todosController.delete_todo)


module.exports = router;