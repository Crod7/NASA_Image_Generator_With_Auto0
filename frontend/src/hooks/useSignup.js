import { useState } from 'react';
import backendURL from '../config/backendURL';
import { useAuthContext } from './useAuthContext';



export const useSignup = () => {

    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const signup = async (name, email, password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${backendURL}/user/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        });
        // Contains user object holding user info, name, and token
        const json = await response.json();               


        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
            return json;
        }
        if (response.ok) {
            /*
            THIS PART IS DISABLED DUE TO A GLITCH THAT CAUSED THE PROFILE PICTURE TO ONLY APPEAR IF THE USER LOGGED IN.
            DUE TO THE TIME CONSTRAINT RESOLUTION WILL BE DISCOVERED IN THE FUTURE. FOR NOW WE JUST
            REQUIRE THE USER TO LOGIN AFTER SUCCESSFUL SIGNUP.
            // User remains logged in because of local storage
            localStorage.setItem('user', JSON.stringify(json))
            // Auth Context
            dispatch({type: 'LOGIN', payload: json});
            */
            // Set loading state back to normal
            setIsLoading(false);
            return json;

        }
    }

    return { signup, isLoading, error}
}
