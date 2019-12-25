const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const app = express();


authRoutes(app);
app.listen(3000)