import {que} from './api'
import { useState } from 'react';
import  MyAcc  from './MyAccordion';
import React from 'react';

const Ac = () => {

    const [data, setData] = useState(que);

    return(
        <>
            {
                data.map((curr) => {
                    return <MyAcc  key={curr.id} questions={curr.question} answer={curr.ans}/>;
                })
            }
        </>
    );
}

export default Ac;