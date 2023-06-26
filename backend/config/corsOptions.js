// Cross Origin Resource Sharing

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5000"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable sending cookies with the request
}

module.exports = corsOptions