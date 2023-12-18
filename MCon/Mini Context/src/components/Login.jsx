import React from 'react'
import { useContext, useState } from "react";
import UserContext from "../context/UserContexts";

const Login = () => {

    const[username, setUsername] = useState('');
    const[pass, setPass] = useState('');
            
    const{setUser} = useContext(UserContext);   // setUser is from UserCp.jsx and UserContext is from UserContext.js

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, pass})
    }

    return (
        <>
            <h2>Login</h2>

            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />

            <p>  </p>

            <input type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password" />

            <button onClick={handleSubmit} >Click me</button>
        </>
    )
}

export default Login;