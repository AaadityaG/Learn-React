import { Fname, Lname } from './App';
import { useContext } from 'react';

function C (){
    const fname = useContext(Fname);
    const lname = useContext(Lname);
    return(
        <>
            {/* Below Becomes the callback hell */}

            {/* <Fname.Consumer>
                {
                    (fn) => {
                        return (
                            <Lname.Consumer>
                                {
                                    (f) => {
                                        return <p> { fn } { f }</p>;
                                    }
                                }
                            </Lname.Consumer>
                        );
                    }
                }
            </Fname.Consumer> */}
            
            <h1>{fname} {lname}</h1>
            
        </>
    );
}

export default C;