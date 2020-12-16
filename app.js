var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var userList = require('./usersList.json');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.get('/login', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
});   

function authenticUser(req, res) {
    for (var i=0; i < userList.length; i++) {
        if (userList[i].userId === req.body.userName && userList[i].password === req.body.password) {
            return true;
        }
    }
    return false;
}
app.post('/configure-job', function (req, res) {
    if (authenticUser(req, res)) {
        res.sendFile( __dirname + "/" + "index.html" );
    } else {
        res.sendFile( __dirname + "/" + "login-failure.html" ); 
    }
});

app.post('/back-to-login', function (req, res){
    res.sendFile( __dirname + "/" + "login.html" );
});
app.listen(8000);
console.log('Server starting on localhost:8000');