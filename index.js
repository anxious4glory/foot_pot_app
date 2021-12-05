const express = require('express');
const path = require('path');

const app = express();
const port = "3000";
const server = process.env.PORT;

// set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 


app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


app.listen(server || port, () => {
    console.log('App Is Running');
});