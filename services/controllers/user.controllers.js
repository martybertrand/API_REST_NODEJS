const user = require("../../connection")

exports.get = (req, client, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.getId = (req, client, res) => {
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.insert = (req, client, res) => {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into users(id, name, email) 
                       values(${user.id}, '${user.name}', '${user.email}')`

    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Insertion was successful');
        }
        else{ console.log(err.message) }
    });
    client.end;
}

exports.update = (req, client, res) => {
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
}

exports.remove =  (req, client, res) => {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}