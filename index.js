const client = require('./connection.js')
const express = require('express');
const app = express();

const user = require('./routes/users.js')

app.use(express.json())

app.use('/users', user)
//require("./routes/users.js")(app)




app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

