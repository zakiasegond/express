
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.listen(3300, function(){
	console.log('listen on port 3300')
});

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


var user ={
		login: "zakia",
		mdp: "azerty"
}


app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/', function(req, res){
	res.sendfile('server.html');
});



app.post('/' , function(req,res){
	console.log(req.body);
	console.log(user.login);
	if (user.login === req.body.login && user.mdp === req.body.password) {
    console.log(req.body.login);
	console.log(req.body.password);
    res.send('success')
    console.log('success');
  }else{
  res.send('error');
  console.log('error');
}
});
