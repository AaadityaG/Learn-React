import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Title(){
    const [num, changeNum] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${num} times.`
    })
    function clicked(){
        changeNum(num + 1);
    }
    return( 
        <>
            <button onClick={clicked} type="button" class="m-5 p-3 btn btn-primary" >Click me - {num}</button>
        </>
    );
}

export default Title;