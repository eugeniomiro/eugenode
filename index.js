const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

const app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.json({ user: 'Eugenio Miró' });
});

let port = process.env.PORT || 3030;

app.listen(port, err => {
    console.log("Server running at port %d", port);
});
