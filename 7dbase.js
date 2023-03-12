var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "a1batch"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    var sql = "INSERT INTO student (roll, per, name) VALUES (7,77,'susan')";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 RECORD instered");
    });
});