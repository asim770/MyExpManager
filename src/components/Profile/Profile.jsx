import React from "react"
import { useState } from "react"
export default function Profile(){
    const [item,setItem]=useState();
    const [price,setPrice]=useState();
    const [expendatures,setExpendatures]=useState([]);
    const [expAmount,setExpAmount] =useState([]);
    function addItem(e){
        setItem(e.target.value);
    }
    function addPrice(e){
        setPrice(e.TARGET.VALUE)
    }
    function createList(){
        setExpendatures()
        expAmount.push(price);
        setItem("");
        setPrice("");

    }
    console.log(expendatures);
    
    return(
        <>
        <div>
            <input type="text" className="bg-white text-black m-2" value={item} onChange={addItem}/>
            <input type="text" className="bg-white text-black m-2" value={price} onChange={addPrice}/>
            <button onClick={createList} className="bg-white text-black">Confirm</button>
        </div>
        <div>

        </div>
        </>
    )
}