const Todo = require('../models/todo.js');

//todo_create, todo_delete, todo_index

const todo_create_todo = (request, response) => {
    const todo = new Todo(request.body);
    // save everything to the database
    todo.save()
        .then((result) => {
            response.redirect('/todos');
        })
        .catch(error => {
            console.error('error: ' + error)
        })

}

const todo_create_get = (request, response) => {
    response.render('todos/create-todo', { title: "Create a new todo" })
}


const todo_index = (request, response) => {
    Todo.find().sort( { createdAt: - 1 } )
        .then((result) => {
            response.render('todos/index', { title: "All Todos", todos: result })
        })
        .catch(error => {
            console.log("error: " + error)
        })
}

const delete_todo = (request, response) => {
    const id = request.params.id;

    Todo.findByIdAndDelete(id)
        .then(result => {
            response.sendStatus(200); 
        })
        .catch(error => {
            console.error('error: ' + error)
        })
}


// export modules
module.exports = {
    todo_create_todo,
    todo_index,
    todo_create_get,
    delete_todo
}