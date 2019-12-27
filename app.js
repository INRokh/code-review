const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('./database/models/user');
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.log);

const passport = require('passport');
require('./config/passport');
app.use(passport.initialize());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

router = express.Router();
router.use('/auth', require('./routes/auth'));
router.use('/admin', require('./routes/admin'));
app.use(router);

module.exports = app;