/**
	Created by Parshant Sachan on 12th July, 2019.
	https://github.com/psachan190
	https://linkedin.com/in/psachan190
**/

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS chatapp", function (err, result) {
        if (err) throw err;
    });
});
con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "chatapp"
});
createTables();
function createTables() {
	var sql = "CREATE TABLE IF NOT EXISTS users (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(250), email VARCHAR(255) , password VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
	var sql = "CREATE TABLE IF NOT EXISTS message (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, user INT(11), message VARCHAR(2550))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
}
module.exports = con;