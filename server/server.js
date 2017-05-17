const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404)
        .send({
            error: 'Page not found',
            name: 'Todo app v.1.0'
        });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Faza',
        age: 27
    }, {
        name: 'Izul',
        age: '27'
    }, {
        name: 'Panji',
        age: 26
    }]);
});

//get /users
//give user a name prop and age

app.listen(3000, () => {
    console.log('Server on Port 3000')
});


module.exports.app = app;