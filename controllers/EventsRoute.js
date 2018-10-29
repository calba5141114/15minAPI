const express = require('express');
const EventRoute = express.Router();
const uuid = require('uuid')


var venueState = {
    name: "Jaesons room",
    location: "246 McAllister St, San Francisco, CA 94102",
    neighborhood: "Civic Center/ Tenderloin",
    rating: 5,
    events: []
}

EventRoute.get('/', (req, res) => {
    res.json({
        message: "Welcome to my API You can !",
        venue_info: {
            name: venueState.name,
            location: venueState.location,
            neighborhood: venueState.neighborhood,
            rating: venueState.rating
        }
    })
})



EventRoute.get('/events', (req, res) => {
    res.json(venueState.events)
});

/**
 * creates an event with an artist, ticket price and content
 */

EventRoute.post('/event', (req, res) => {

    let artist = req.query.artist;
    let ticket_price = req.query.ticket_price;
    let content = req.query.content;
    let event = {
        artist: artist,
        ticket_price: ticket_price,
        content: content,
        uuid: uuid()
    }

    venueState.events.push(event)

    return res.json(event)

})

EventRoute.get('/events/:uuid', (req, res) => {
    for (event in venueState.events) {

        if (event.uuid = req.params.uuid) {
            return res.json(event)
        }
    }
});




// uuidTest = uuid()

module.exports = EventRoute;