var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/src/pages/home.html'));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.use(express.static(__dirname + '/src/pages'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/src/css'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/src/js'));

app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
