import React from 'react'

import './App.css'
import UserContextProvider from './context/UserCp.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {

  return (
    <>
      <h1>Hello</h1>

      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

    </>
  )
}

export default App
