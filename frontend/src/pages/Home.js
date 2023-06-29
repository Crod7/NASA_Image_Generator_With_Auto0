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

  return (
    <div className="home-container">
      <div className="home-layout">
        <p className="home-greetings">Hello {user.name}!</p>
        <p className="home-title">Today's Daily Image</p>
        {requestObject && (
          <img 
            src={requestObject.url}
            alt=''
            className="nasa-image"
          />
        )}
        <div className="home-nasa-info">
          <p className="home-nasa-info-subtitle">Title</p>
          <div>
            {requestObject && (
              <p>{requestObject.title}</p>
            )}
          </div>
          <p className="home-nasa-info-subtitle">Today's Date</p>
          <div>
            {requestObject && (
              <p>{requestObject.date}</p>
            )}
          </div>
          <p className="home-nasa-info-subtitle">Credit</p>
          <div>
            {requestObject && (
              <p>{requestObject.credit}</p>
            )}
          </div>
          <p className="home-nasa-info-subtitle">Explanation</p>
          <div>
            {requestObject && (
              <p>{requestObject.explanation}</p>
            )}
          </div>
        </div>
      </div>

    </div>

  );
}

export default Home;
