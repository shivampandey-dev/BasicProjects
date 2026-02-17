import React, { useState } from 'react'
import { UserloginContext } from "./UseLoginContext"


function LoginProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})

 
    return (
        <UserloginContext.Provider value={{
            isLogin, user, setIsLogin, setUser
        }}>
            {children}
        </UserloginContext.Provider>
    )
}

export default LoginProvider