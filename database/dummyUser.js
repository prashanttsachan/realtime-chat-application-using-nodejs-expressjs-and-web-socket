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

    var sql = "INSERT INTO login (username , password) VALUES ('nk' , 'nk')";
    var sql1 = "INSERT INTO login (username , password) VALUES ('sk' , 'sk')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("2 record inserted");
    });

});

