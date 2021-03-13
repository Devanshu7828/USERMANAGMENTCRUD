const express = require("express");
const employeController = require("../controoler/employeController");

function initRoute(app) {
    app.get('/', (req, res) => {
        res.render('homeRoute')
    })
    app.get('/register', employeController().registerPage)
    app.post('/register', employeController().postRegister)
    app.get('/Homepage', employeController().AFterRegister)
    app.get('/updateUser/:id', employeController().editUser)
    app.post('/update/:id', employeController().update)
    
    app.get('/deleteUser/:id', employeController().deleteUser)
}
module.exports = initRoute;
