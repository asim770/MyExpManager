import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
export default function Account(){
    const [amount,setAmount]= useState("");
    const navigate=useNavigate();

    function amountUpdate(e){
        setAmount(e.target.value);
    }

    async function amountAdded(e){
        e.preventDefault();
        const response=await fetch("http://localhost:8000/account",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: amount
            })
        })
        const result= response.json;
        if(response.ok){
            alert("✅ Registration successful!");
            setAmount("");
        }else {
            alert("❌ " + result.msg);
        }
    }
    return(
        <>
        <div className="h-screen flex justify-center items-center">
            <div className="bg-[#696969] h-auto flex flex-col gap-8 p-[35px] border-[1px] border-white rounded-[20px] shadow-2xl shadow-[#000000]">
                
                <h1 className="text-[20px] font-bold text-amber-50 ">Enter your Amount</h1>

                <input type="text " className="bg-amber-50 h-[40px] w-[200px] p-[10px] rounded-[20px] border-none hover:shadow-black hover:shadow-2xl duration-300 transition-colors" placeholder="Enter Your Amount"  value={amount} onChange={amountUpdate}/>

                <button onClick={amountAdded} className="px-6 py-3 rounded-[25px] border-[1px] border-[#b4b4b461] bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 hover:text-white transition-colors duration-300 shadow-md ">submit</button>
                
            </div>
        </div>
        </>
    )
}