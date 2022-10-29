const express = require('express');
const mysql = require('mysql');
const app = express();

const port = process.env.PORT || 8000;

// connection part
const dbconn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'flightsystem'
});


// database connection
dbconn.connect((error)=>{
    if(error){
        return console.log('error:'+error.message)
    }
    console.log("Connected  to MySql database")
});


// api construction

// 1) create a passenger table
app.get('/createPassengersTable',(req,res)=>{

    let sql_query = 'CREATE TABLE Passenger(PassID int auto_increment,name varchar(40),email varchar(40),passward varchar(15),PRIMARY KEY(PassID));'

    dbconn.query(sql_query,(error,result)=>{

        if(error){
            throw error;
        }

        console.log(result);
        res.send("passenger Table Created Successfully");
    })
})

// 2) insert  data into the passenger table
app.get('/addPassengers',(req,res)=>{

    let sql_query = 'insert into Passenger values(1,"Gourav","gouravsamal100@gmail.com","xyz123");'

    let query = db.query(sqll,post,(error,result)=>{
        if(error){
            throw error;
        }

        console.log(result);
        res.send("Passenger Added")
    })
})


// listening to port 
app.listen(port,(req,res)=>{
    console.log(`Server is listening to port ${port}`)
});


