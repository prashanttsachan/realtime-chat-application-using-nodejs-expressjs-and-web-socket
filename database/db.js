/**
	Created by Parshant Sachan on 12th July, 2019.
	https://github.com/psachan190
	https://linkedin.com/in/psachan190
**/

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS chatapp", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});


module.exports = con.connection;