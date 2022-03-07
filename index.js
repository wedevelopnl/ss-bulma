const express = require('express');
let nunjucks = require('nunjucks');
const path = require('path');

const PORT = 5000;
const app = express();
app.use(express.static(path.join(__dirname, '/')));

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function (req, res) {
    res.render('index.njk')
})

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})