const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

require('./database');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'public', 'uploads')));

module.exports = app;