// Cross Origin Resource Sharing

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "lh3.googleusercontent.com",
        "https://www.google.com"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable sending cookies with the request
};

module.exports = corsOptions;