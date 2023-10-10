import "./card.css"
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


// import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import { useState } from "react";

function Card(){
    const [num, setState] = useState(0);

    function dec(){
        if(num===0) {
            alert("Number is already zero") 
        }
        else{
            setState(num-1)
        }
    }

    return(
        <div className="container">
            <h1>{num}</h1>
            <div className="Buttons">
                <Tooltip title="Increase">
                <button type="button" onClick={() => setState(num+1)}>
                    <AddCircleOutlinedIcon/>
                </button>
                </Tooltip>
                <Tooltip title="Decrease">
                <button type="button" onClick={dec}>
                    <RemoveCircleOutlinedIcon/>
                </button>
                </Tooltip>
                
            </div>
        </div>
    );
}

export default Card;