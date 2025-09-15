import React, { useState, useEffect } from "react";

export default function Profile() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [expendatures, setExpendatures] = useState([]);
  const [expandAmount, setExpandAmount] = useState(0);
  const [userAmount, setUserAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(0);

  // Load userAmount once from localStorage
  useEffect(() => {
    const savedAmount = localStorage.getItem("Amount");
    if (savedAmount) {
      setUserAmount(parseInt(savedAmount));
      setBalanceAmount(parseInt(savedAmount));
    }
  }, []);

  function addItem(e) {
    setItem(e.target.value);
  }

  function addPrice(e) {
    setPrice(e.target.value);
  }

  function createList() {
    if (item.trim() === "" || price.trim() === "") {
      alert("Add item and price");
      return;
    }
    if(price>balanceAmount){
        alert("you have insufficient balance");
        setItem("");
        setPrice("");
        return;
    }

    const priceValue = parseInt(price);

    // Add new item
    setExpendatures([...expendatures, { name: item, price: priceValue }]);

    // Calculate new totals
    const newExpandAmount = expandAmount + priceValue;
    const newBalance = userAmount - newExpandAmount;

    setExpandAmount(newExpandAmount);
    setBalanceAmount(newBalance);

    // Save new balance in localStorage
    localStorage.setItem("Amount", newBalance);

    // Reset input
    setItem("");
    setPrice("");
  }

  function deleteItem(index) {
    const deletedPrice = expendatures[index].price;
    const updatedExpendatures = expendatures.filter((_, i) => i !== index);

    const newExpandAmount = expandAmount - deletedPrice;
    const newBalance = userAmount - newExpandAmount;

    setExpendatures(updatedExpendatures);
    setExpandAmount(newExpandAmount);
    setBalanceAmount(newBalance);

    localStorage.setItem("Amount", newBalance);
  }

  return (
    <>
      <div className="flex flex-row p-[40px] md:justify-between gap-1 w-screen items-center md:w-full">
        <input
          type="text"
          className="bg-white text-black h-[40px]  w-auto p-[10px] rounded-full hover:shadow-2xl hover:shadow-[#646060] transition-colors duration-300"
          value={item}
          onChange={addItem}
          placeholder="Enter item"
        />
        <input
          type="number"
          className="bg-white text-black h-[40px] p-[10px] rounded-full hover:shadow-2xl hover:shadow-[#646060] transition-colors duration-300"
          value={price}
          onChange={addPrice}
          placeholder="Enter price"
        />
        <button onClick={createList} className="px-[10px] h-[40px] rounded-[25px] border-[1px] border-[#b4b4b461] bg-gray-700 text-gray-100 font-semibold hover:bg-gray-600 hover:text-white transition-colors duration-300 shadow-md">
          Confirm
        </button>
      </div>
      <div className="m-4 flex md:justify-between md:px-[50px] flex-col md:flex-row gap-10 justify-center items-center">
        <p className="h-[150px] text-amber-50 bg-[#5b5a5a] w-[300px] p-[15px] border-[1px] text-[20px] font-bold rounded-[20px] shadow-xl/30  border-amber-50 ">
          Total Amount: <br /> <br /> <span>₹{userAmount}</span></p>
        <p className="h-[150px] text-amber-50 bg-[#5b5a5a] w-[300px] p-[15px] border-[1px] text-[20px] font-bold rounded-[20px] shadow-xl/30  border-amber-50 ">Spent: <br />
        <br /><span>₹{expandAmount}</span></p>
        <p className="h-[150px] text-amber-50 bg-[#5b5a5a] w-[300px] p-[15px] border-[1px] text-[20px] font-bold rounded-[20px] shadow-xl/30  border-amber-50 ">Balance: <br />
        <br /><span>₹{balanceAmount}</span></p>
      </div>
      <div>
        {expendatures.map((item, index) => (
          <div key={index}>
            <span>
              {item.name} - ₹{item.price}
            </span>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
