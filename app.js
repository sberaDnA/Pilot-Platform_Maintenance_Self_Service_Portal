const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const url = require('url');

router.get('/login',function(req,res){
    let filePath = path.join(
        __dirname,
        req.url === "/" ? "login.html" : req.url
    );
    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname+'/login.html'));
});

router.get('/index',function(req,res){
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 8000');