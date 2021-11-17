const express = require('express');
const path = require('path');

const app = express();
const port = "3000";

// set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


app.listen(port, () => {
    console.log('listening On Port 3000');
});