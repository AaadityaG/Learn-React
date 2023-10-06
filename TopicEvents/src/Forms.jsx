import { useState } from "react";
import "./Form.css"

function Makeform(){
    const [fullData, setfName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEventF = (e) => {
        const {name, value} = e.target; 
        setfName((prev) => {
            console.log(prev);
            return {
                ...prev,
                [name]: value,
            };

            // if(name==="fname"){
            //     return{
            //         fname:value,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: prev.phone,
            //     };
            // }
            // if(name === "lname"){
            //     return {
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email,
            //         phone: prev.phone,
            //     }
            // }
            // if(name === "email"){
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value,
            //         phone: prev.phone,
            //     }
            // }
            // if(name === "phone"){
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: value,
            //     }
            // }
        });
        
        
        const onSub = (e) =>{
            e.preventDefault();
        }

        return(
            <>
            <div>
                <form onSubmit={onSub}>
                    <h1 style={{color:"#333"}}>Hello, {fullData.fname} {fullData.lname}</h1>
                    <h>{fullData.email}</h>
                    <h3>{fullData.phone}</h3>
                    <input autoComplete="off" type="text" name="fname" placeholder="Enter Your First Name" value={fullData.fname} onChange={inputEventF}/>
                    <input autoComplete="off" type="text" name="lname" placeholder="Enter Your Last Name" value={fullData.lname} onChange={inputEventF}/>
                    <input autoComplete="off" type="email" name="email" placeholder="Enter Your Email" value={fullData.email} onChange={inputEventF}/>
                    <input autoComplete="off" type="number" name="phone" placeholder="Enter Your Phone Number" value={fullData.phone} onChange={inputEventF}/>
                    {/* <button type="submit">Click me👍</button> */}
                </form>
            </div>
            </>
        );
    }
}

export default Makeform;