import { useState } from "react";
import "./App.css";
import {Head, Imges} from "./components/Heading";
function App() {
  
  let h1 = "Aditya"; 
  let h2 = "Hello"; 
  let h3 = "Hello, Aditya"; 
  let obj = {color:"red"};

  return (
    <>
      {/* <h1>{`This is ${h1}`}</h1>
      <h2>{`This is ${h2}`}</h2>
      <h3>{`This is ${h3}`}</h3>
      <p>addition of 2 and 3 = {2 + 3}</p>
      <p>multiplication of 2 and 3 = {2 * 3}</p> */}
      {/* <h1 className="heading" style={obj}>Click on imgae</h1> */}

      <Head></Head>
      <Imges></Imges>
      <Imges></Imges>
      <Imges></Imges>
    </>
  );
}

export default App;
