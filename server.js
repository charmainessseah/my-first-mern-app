const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routeUrls = require('./backend/routes/routes');
const PORT = process.env.PORT || 4000;
const path = require('path');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Database is connected');
})

app.use(express.json());
app.use(cors());
app.use('/app', routeUrls);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})