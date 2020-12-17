var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var userList = require('./usersList.json');

var jenkinsapi = require('jenkins-api');


//username/password
var jenkins = jenkinsapi.init("http://devopsAdmin:devops@2020@3.214.97.123:8080");

//jenkins auth using Token
//var jenkins = jenkinsapi.init('http://3.214.97.123:8080/job/TestUI/buildWithParameters?token=1178213d984fd5565829a313a2763270ac');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));
 
app.get('/login', function (req, res) {  
    res.setHeader('Access-Control-Allow-Origin', true);
    res.sendFile( __dirname + "/public/html/" + "login.html" );  
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
        res.setHeader('Access-Control-Allow-Origin', true);
        res.sendFile( __dirname + "/public/html/" + "index.html" );
    } else {
        res.setHeader('Access-Control-Allow-Origin', true);
        res.sendFile( __dirname + "/public/html/" + "login-failure.html" ); 
    }
});

app.post('/submit-job', function (req, res) {
    console.log('inside job submit');
    jenkins.last_build_info('TestUI', function(err, data) {
        console.log('inside jenkins');
        if (err) { 
            console.log('inside error');
            console.log(err); 
            res.send('job failed');
        } else {
            console.log(data);
            res.send('job success');
        }
    });

    jenkins.build_with_params('TestUI', (optional){depth: 1, PlatformName: "Alteryx", token: 'UI_Token'}, 
    function(err, data) {
        if (err){ return console.log(err); }
        console.log(data)
      });
});
app.listen(8000);
console.log('Server starting on localhost:8000');