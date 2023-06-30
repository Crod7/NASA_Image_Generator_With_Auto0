// Cross Origin Resource Sharing



const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "https://lh3.googleusercontent.com/", // This allows user's profile image from google to be obtained
        "https://nasa-daily-image-generator-api.onrender.com/",
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable sending cookies with the request
};

module.exports = corsOptions;