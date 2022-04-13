import axios from "axios";
import React, { useEffect } from "react";
function Dummy(){
    useEffect (()=>{

       axios.get("http://0.0.0.0:5000/").then((res)=>{
           console.log(res);
       })
       axios.post("http://localhost:5000/adduser",{name:"pritpal",age:22}).then((res)=>{
           console.log(res);
       })
    })

    return(
        <>
            <h1>DUMMY COMPONENTS </h1>
        </>
    )
    }
export default Dummy;