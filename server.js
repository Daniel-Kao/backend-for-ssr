const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api', require('./routes/api/Auth.js'));

app.listen(3000, () => console.log('server started on port 3000'));
