import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img width={300} src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"/>
      <h3>The Og online movie streaming platform...</h3>
      <h5>Watch these...😎 epic: </h5>
      <ol>
        <li>Asur</li>
        <li>Scoop</li>
        <li>Money Heist</li>
        <li>Family man</li>
        <li>Scam 1992</li>
      </ol>
    </>
  )
}

export default App
