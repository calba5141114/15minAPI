const express = require('express');
const app = express();
const EventRoute = require('./controllers/EventsRoute')

app.use('/', EventRoute)

app.listen(3000, () => {
    console.log('Rnning on port 3000')
});