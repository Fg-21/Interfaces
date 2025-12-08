import React, { createContext, useState } from "react";

type AuthContextType = {
    userName: string
    isLoggedIn: boolean
    loginUser: (newName: string) => void
    logoutUser: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {children : React.ReactNode}


export const AuthContextProvider = ({children}: Props) =>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    
    const loginUser = (name: string) =>{
        setLoggedIn(true)
        setUserName(name)
    }

    const logoutUser = () =>{
        setLoggedIn(false)
        setUserName("")
    }

    return(
        <AuthContext.Provider value={{userName, isLoggedIn, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}