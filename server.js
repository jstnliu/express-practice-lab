// Load express
const express = require('express');
const path = require('path');
const studentDb = require('./data/student-db');

// Create our express app
const app = express();

//configure app (app.set)
app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//defining 'root' route directly on app
//localhost:3000/
app.get('/', function(req, res) {
    res.redirect('/home');
});

//get localhost:3000/home
app.get('/home', function(req, res) {
    res.render('home')
});

//get localhost:3000/students
app.get('/students', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', {
        students
    })
});

//listening to port 3000
app.listen(3000, function() {
    console.log('listening on port 3000');
});