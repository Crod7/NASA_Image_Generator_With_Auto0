import React, { useEffect, useState } from 'react';
import getAllFish from '@/lib/getAllFishes';
import Link from 'next/link';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';

type Fish = {
    name: string;
    img_src_set: {
      '2x': string;
    };
  };

export default function Index() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {

  }, []);

  return (
    <div>          
      <Link className='button-box' href="/fish">Generate More Fish</Link>

      {user ? (
        <div className='fish-select-page-layout'>
          
        </div>
      ) : (
            <p>Loading...</p>
      )}
    </div>
  );
}