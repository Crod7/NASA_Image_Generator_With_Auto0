import React, { useEffect, useState } from 'react';
const axios = require('axios');
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';


interface NasaImage {
  url: string;
  title: string;
  date: string;
  credit: string;
  explanation: string;
}

export default function Index() {
  const [requestObject, setRequestObject] = useState<NasaImage | null>(null);
  const { user, error, isLoading } = useUser();


  const url = 'https://apod.ellanan.com/api';

  useEffect(() => {
    const getNasaImageOfTheDay = async () => {
      try {
        const response = await axios.get(url, { timeout: 60000 }); // Increase timeout to 60 seconds
        const obj = response.data;
        setRequestObject(obj);
      } catch (error) {
        console.log(error);
      }
    };

    getNasaImageOfTheDay();
  }, []);

  if (user) {
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

}