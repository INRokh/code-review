const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('./database/models/user_model');

const passport = require('passport');

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.log);

app.use(require('./routes/auth'));

module.exports = app;