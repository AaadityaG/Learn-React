import { useCallback, useState } from "react";
import "./Forms.css"

function Makeform(){
    const [addName, setName] = useState("Sir");
    let greetTo = addName;
    const inputEvent = (e) => {
        greetTo = e.target.value;
    }
    const handleClick = () =>{
        setName(greetTo);
    }
    return(
        <>
            <div>
                <h1 style={{color:"#333"}}>Hello, {greetTo}</h1>
                <input type="text" placeholder="Enter Your Name" onChange={inputEvent}/>
                <button onClick={handleClick}>Click me👍</button>
            </div>
        </>
    );
}

export default Makeform;