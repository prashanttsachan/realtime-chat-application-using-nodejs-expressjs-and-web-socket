/**
	* Created by Prashant on 14-07-2019.
	* https://github.com/psachan190
	* https://www.linkedin.com/in/psachan190
	* E-mail: psachan190@gmail.com
	
	
	* Abhishek Verma
	* https://github.com/abhinittkkr
	* https://linkedin.com/in/abhinittkkr
**/
var express         = require('express');
var path            = require('path');
var app             = express();
var server          = require('http').Server(app);
var io              = require('socket.io')(server);
var bodyParser      = require('body-parser');
var session 		= require('express-session');
// ======================Mysql DataBase ========================
var con           	= require('./database/db');


// =========================================================
users = [];
connections = [];
var username;



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({secret: 'sachan'}));


app.get('/' , function (req , res) {
    authenticate(req , res);
});

app.get('/chat_start' , function (req , res) {
    authenticate(req , res);
	chat_start();
});


app.get('/login' , function (req , res) {
    authenticate(req , res);
});

app.post('/login' , function (req , res) {
    login(req , res);
});
app.get('/logout', function (req, res) {
    delete req.session.user;
    res.redirect('/login');
});

function chat_start() {
// ===================================Sockets starts  =========================
    io.sockets.on('connection', function (socket) {
        connections.push(socket);
        //console.log("Connected:  %s Socket running", connections.length);
// ====================Disconnect==========================================
        socket.on('disconnect', function (data) {
            connections.splice(connections.indexOf(data), 1);
            //console.log('Disconnected : %s sockets running', connections.length);
        });
// ==================initilize data and show================================
        socket.on('initial-messages', function (data) {
            var sql = "SELECT * FROM message ";
            con.query(sql, function (err, result, fields) {
                var jsonMessages = JSON.stringify(result);
                io.sockets.emit('initial-message', {msg: jsonMessages});
            });
        });
        socket.on('username', function (data) {
            socket.emit('username', {username: username});
        });
//	================ Brodcasting of messages ================================== //
		socket.on ('typing', function (data) {
			socket.broadcast.emit('typing', data);
		});
//   ============== Send and Save Messages=====================================
        socket.on('send-message', function (data) {
            var sql = "INSERT INTO message (message , user) VALUES ('" + data+ "' , '"+username+"')";
            con.query(sql, function (err, result) {
                if (err) throw err;
            });
            io.sockets.emit('new-message', {msg: data , username : username});
        })
    })
}

function login(req,res){
    var post = req.body;
     username  = post.user;
    var password = post.password;
    var sql = "SELECT * FROM login WHERE username='" + username+"'";
    con.query(sql, function (err, result, fields) {
		if (result.length == 1) {
			var jsonString = JSON.stringify(result);
			var jsonData = JSON.parse(jsonString);
			if(jsonData[0].password === password) {
				req.session.user = post.user;
				username = post.user;
				res.redirect("/chat_start");
			}else  {
				res.redirect("/login");
			}
		} else {
			res.redirect("/login");
		}
    });
}

function authenticate(req,res){
    if (!req.session.user) {
        res.sendFile(__dirname + '/public/login.html');
    }
    else {
        username = req.session.user;
        res.sendFile(__dirname + '/public/chat.html');
    }
}
server.listen(3000, function(){
    console.log('listening on :3000');
});



