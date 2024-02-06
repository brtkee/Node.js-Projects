// get all the npm needed
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todosRoutes');

const app = express();

// make the db connection
const dbURI = 'mongodb+srv://brtke:123@todoapp.athzjv3.mongodb.net/';

mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000)
    }) 
    .catch((error) => {
        console.log('Error: ' + error)
    })


// set the ejs
app.use(express.urlencoded( { extended: true } ));
app.set('view engine', 'ejs');

// set the static folder for css
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.redirect('todos')
})

// use routes from todoRoutes file
app.use("/todos", todoRoutes)

// if everything was not found render the 404
app.use((request, response) => {
    response.status(404).render('404', { title: "404" })
})