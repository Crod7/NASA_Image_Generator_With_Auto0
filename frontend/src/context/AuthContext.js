import { createContext, useReducer, useEffect } from "react"

export const AuthContext = createContext()
// Handles what happens when a user logs in or logs out
export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload}
        case 'LOGOUT':
            return { user: null}
        default:
            return state
    }
}



export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null                  // When a user loads up the website they are not logged in by default
    })
    // Only fire the useEffect once, when the component renders(When the app laods) to check if a token exists in
    // local storage(checking to see if a user is still logged in)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        // Log the user in from information at local storage, else keep token null
        if (user){
            dispatch({ type: 'LOGIN', payload: user})
        }
    }, [])

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}