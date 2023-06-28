import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import backendURL from '../config/backendURL';



export const useLogin = () => {
    
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(null);
    const { dispatch } = useAuthContext();



    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        /**
         * Logs in and is used in creating the json web token. If the login is invalid it will return an error message.
         * @json is the actual web token.
         */
        const response = await fetch(`${backendURL}/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()




        //Incase any of the login credentials are invalid or don't exists, we throw an error.
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }



        // Valid Login
        if (response.ok) {       

            // User remains logged in because of local storage
            localStorage.setItem('user', JSON.stringify(json))
            // Auth Context
            dispatch({type: 'LOGIN', payload: json});
            console.log(json)
            // Set loading state back to normal.
            setIsLoading(false);
            return json;
        }
    }
    return { login, isLoading, error }
}
