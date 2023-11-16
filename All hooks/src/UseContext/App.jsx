// import './App.css'
import { createContext } from 'react';
import  A  from './CompA';

const Fname = createContext();   // creating context
const Lname = createContext();

function App() {
  
  return (
    <>
      <Fname.Provider value={"Aditya"}>
        <A/>
      </Fname.Provider>
      <Lname.Provider value={"Gaikwad"}>
        <A/>
      </Lname.Provider>
    </>
  )
}

export default App;
export { Fname, Lname };
