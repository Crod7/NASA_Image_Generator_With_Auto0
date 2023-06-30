// Cross Origin Resource Sharing

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "https://lh3.googleusercontent.com/",
        "https://nasa-daily-image-generator-api.onrender.com/",
        "https://nasa-daily-image-generator.onrender.com",
        'https://nasa-daily-image-generator-api.onrender.com/auth/google/callback',
        
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the desired headers
};

module.exports = corsOptions;
