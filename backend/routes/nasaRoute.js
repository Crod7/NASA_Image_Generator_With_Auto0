const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/apod', async (req, res) => {
  /*
  The offical api.nasa.gov was working but I kept experinceing 504 errors. Switching to apod.ellanan.com/api
  led to consistent and error free request.
  This is a backup route just in case api.nasa.gov has issues again.
  const url = 'https://apod.ellanan.com/api';
  */
  const url = 'https://api.nasa.gov/planetary/apod?api_key=40L8TeyVhkIn6gb8W5YVueAAjvmWegag9VRw2Nf4';
  
  try {
    const response = await axios.get(url, { timeout: 60000 }); // Increase timeout to 60 seconds
    const jsonData = response.data;
    console.log("response:", jsonData);
    res.json(jsonData);
  } catch (error) {
    console.error({
      "message": "Error making API request.",
      error: error,
    });
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
