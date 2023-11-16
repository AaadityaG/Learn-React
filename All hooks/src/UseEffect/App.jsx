import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [val, setVal] = useState(0);
    function clicked(){
        setVal(val+1);
    }

    useEffect(
        () => {
            alert("Thanks")
        },
        []
    )
    
    return (
        <>
            {/* <button>Hello Wrold {val} </button> */}
            <button type="button" class="m-5 p-3 btn btn-primary" onClick={clicked}>Primary {val}</button>
        </>
    );
}

export default App;