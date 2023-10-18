
import React from 'react';
import "./accordian.css"

const MyAcc = ({questions, answer}) => {
    return(
        <>
            {/* <h1>{questions}</h1>
            <p>{answer}</p> */}

            <div className='Container'>
                <details>
                    <summary>{questions}</summary>
                    <p>{answer}</p>
                </details>
            </div>
            <br />
        </>
    );
}

export default MyAcc;