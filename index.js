var express   =    require("express");

var app       =    express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cmpe281',
 port      : '3306'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
}
});

function handle_database(req,res) {
console.log("inside handle");
connection.query("select * from gumball",function(err,rows){
     console.log('The solution is: ', rows);
          // connection.release();
            if(!err) {
                res.json(rows);
            }           
        });
}

app.get("/",function(req,res){-
        handle_database(req,res);
});

app.listen(process.env.PORT || 5000);
