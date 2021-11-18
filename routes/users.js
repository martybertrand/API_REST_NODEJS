const express = require('express');
const router = express.Router();
const userController = require('../services/controllers/user.controllers')
const client = require('../connection.js');

router.get('/', function (req, res) { userController.get(req, client, res)});

router.get('/:id', function (req, res) { userController.getId(req, client, res)});

router.post('/', function (req, res) { userController.insert(req, client, res)});

router.put('/:id', function (req, res) {userController.update(req, client, res)});

router.delete('/:id', function (req, res) {userController.remove(req, client, res)});

module.exports = router



/*const remove = require("../services/delete/users")
const get = require("../services/get/users")
const create = require("../services/post/users")
const update = require("../services/put/users")

module.exports = function (router, client) {
    router.get('/', (req, res) => {
        get(req, client, res)
    })
    router.post('/', (req, res) => {
        create(req, client, res)
    })
    router.put('/', (req, res) => {
        update(req, client, res)
    })
    router.delete('/', (req, res) => {
        remove(req, client, res)
    })
    
}*/
//module.exports = router
/*router.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

router.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

router.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into users(id, name, email) 
                       values(${user.id}, '${user.name}', '${user.email}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

router.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set name = '${user.name}',
                       email = '${user.email}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

router.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})*/

