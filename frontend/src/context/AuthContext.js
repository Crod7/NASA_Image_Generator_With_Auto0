import { createContext, useReducer, useEffect } from "react"

export const AuthContext = createContext()
// Handles what happens when a user logs in or logs out
export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { authUser: action.payload}
        case 'LOGOUT':
            return { authUser: null}
        default:
            return state
    }
}



export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        authUser: null                  // When a user loads up the website they are not logged in by default
    })
    // Only fire the useEffect once, when the component renders(When the app laods) to check if a token exists in
    // local storage(checking to see if a user is still logged in)
    useEffect(() => {
        const authUser = JSON.parse(localStorage.getItem('user'))
        // Log the user in from information at local storage, else keep token null
        if (authUser){
            dispatch({ type: 'LOGIN', payload: authUser})
        }
    }, [])

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}