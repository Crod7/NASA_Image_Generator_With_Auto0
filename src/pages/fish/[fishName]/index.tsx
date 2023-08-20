import React, { useEffect, useState } from 'react';
import getFish from '@/lib/getFish';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';

type Fish = {
    name: string;
    img_src_set: {
      '2x': string;
    };
    url: string;
  };

export default function Index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const currentUrl = router.asPath;
  console.log(currentUrl)
  const newUrl = currentUrl.replace(/ /g, "");
  console.log(newUrl)
  const [fishData, setFishData] = useState<Fish[] | null>(null);

  const handleSave = async () => {
    // Make the Axios POST request to the API endpoint
    try {
      await axios.post('/api/user/add_fish', {
        nickname: user?.nickname, 
        newString: currentUrl, 
      });

      // Handle success (optional)
      console.log('String added successfully.');
    } catch (error:any) {
      // Handle error (optional)
      console.error('Error adding string:', error.message);
    }
  };

  const fetchData = async () => {

    const fetchFishData = await getFish(currentUrl);
    setFishData(fetchFishData);


  };

  useEffect(() => {

    fetchData();
  }, []);

  return (
    <div>
      { fishData ? (
        <div className='details-page-layout'>
          <Link className='button-box' href="/fish">Go Back</Link>
          <h2 className="name-text">{fishData[0].name}</h2>
          <img className='image-full' src={fishData[0].img_src_set['2x']} alt={fishData[0].name} />
          <a className='button-box' href={fishData[0].url} target=".">Link to wiki page</a>
          <button className='button-box' onClick={handleSave}>Save to Aquarium</button>
          <br />

        </div>
      ) : (
            <p>Loading...</p>
      )}
    </div>
  );
}