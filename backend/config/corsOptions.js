// Cross Origin Resource Sharing

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "https://lh3.googleusercontent.com/",
        "https://nasa-daily-image-generator-api.onrender.com/",
        "https://nasa-daily-image-generator.onrender.com",
        'https://nasa-daily-image-generator-api.onrender.com/auth/google/callback',
        'https://nasa-daily-image-generator-api.onrender.com/auth/login/success',
        'https://accounts.google.com/',
        'https://nasa-daily-image-generator-5ze8.vercel.app',
        'https://nasa-daily-image-generator-5ze8.vercel.app/auth/login/success',
        'https://nasa-daily-image-generator-5ze8.vercel.app/auth/google/callback',

    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'access-control-allow-credentials'],
};

module.exports = corsOptions;
