/**
	Created by Parshant Sachan on 12th July, 2019.
	https://github.com/psachan190
	https://linkedin.com/in/psachan190
**/


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chatapp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql= "DROP TABLE message";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("table removed");
    });
});

