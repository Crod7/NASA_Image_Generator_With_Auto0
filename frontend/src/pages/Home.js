import { useEffect, useState } from "react";
import '../css/home.css';
const backendURL = require('../config/backendURL');

const Home = ({ user }) => {
  const [requestObject, setRequestObject] = useState(null);

  useEffect(() => {
    const getNasaImageOfTheDay = async () => {
      try {
        const response = await fetch(`${backendURL}/nasa/apod`, {
          method: 'GET',
        });
        if (response.ok) {
          const responseData = await response.json();
          setRequestObject(responseData);
        } else {
          throw new Error('Request to NASA failed.');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNasaImageOfTheDay();
  }, []);

  console.log("requestObject:", requestObject);

  return (
    <div>
      <p className="home-title">Hello {user.name}!</p>
      {requestObject && (
        <img 
          src={requestObject.url}
          alt=''
          className="nasa-image"
        />
      )}
    </div>
  );
}

export default Home;
