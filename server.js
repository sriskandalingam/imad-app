var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/table', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'table.html'));
});


app.get('/urban.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'urban.html'));
});

app.get('/urbanpage2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'urbanpage2.html'));
});

app.get('/locinfo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'locinfo.html'));
});
app.get('/analysis', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'analysis.html'));
});
app.get('/poll', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'poll.html'));
});
app.get('/homepage',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'homepage.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
