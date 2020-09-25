const express = require('express');
const routes = require('./routes/index');
const app = express();
//app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({ extended: true }));
app.use('/', routes);
module.exports = app;

