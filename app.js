var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

const port = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/api', routes);

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))