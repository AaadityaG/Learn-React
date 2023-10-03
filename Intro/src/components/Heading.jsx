import React from "react";

function Head(){
    return(
        <h1>Hii this is imported...</h1>
    )
}

function Imges(){
    return(
        <img src="https://picsum.photos/200/300" alt="random Images" style={{margin:"0 20px"}}/>
    );
}

export {Head, Imges};