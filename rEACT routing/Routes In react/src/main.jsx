import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './Contact.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")  
)
