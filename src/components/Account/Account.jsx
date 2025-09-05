import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
export default function Account(){
    const [amount,setAmount]= useState("");
    const navigate=useNavigate();

    function amountUpdate(e){
        setAmount(e.target.value);
    }

    function amountAdded(){
        if(amount==0){
            alert("ENTER SOME AMOUNT");
            navigate("/")
        }
        else{
            localStorage.setItem("Amount",amount);
            navigate("/profile");
        }
    }
    return(
        <>
        <div className="h-screen flex justify-center items-center">
            <div>
                Enter Your Amount

                <input type="text" value={amount} onChange={amountUpdate}/>

                <button onClick={amountAdded}>submit</button>
                
            </div>
        </div>
        </>
    )
}