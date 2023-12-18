import React from 'react'
import { useContext } from "react";
import UserContext from "../context/UserContexts";
// import user from "../context/UserCp.jsx"

const Profile = () => {
    const {user} = useContext(UserContext);

    if(!user) return <p>Please Enter your name</p>

    return  <h2> Welcome {user.username}</h2>
}

export default Profile;