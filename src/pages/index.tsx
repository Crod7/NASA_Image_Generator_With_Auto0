import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
import axios from 'axios';
import User from '../models/UserModel';
import connectMongoDB from "@/lib/MongoConnect";
import '../styles/login.css';


export default function Profile() {
  const { user, error, isLoading } = useUser();

  
  // Used for user registration if not in database
  const registerUser = async () => {
    try {
      const userData = {
        nickname: user?.nickname,
        family_name: user?.family_name,
        given_name: user?.given_name,
        picture: user?.picture,
      }
      const registerResponse = await axios.post('/api/user/set_user', { user: userData })
    }catch(err){
      console.log(err);
    }
  }


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    // If the user successfully logs in, we either create or verify that the user exists in the database with axios
    registerUser();

    const pictureSrc = user.picture ?? 'none';
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Link href="/api/auth/logout">Logout</Link>
        <img src={pictureSrc} alt='none' />
        <Link href="/fish">
          Go to Fish Page
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/api/auth/login">Login</Link>
    </div>
  );
}