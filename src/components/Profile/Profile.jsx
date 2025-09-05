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
      <div>
        <input
          type="text"
          className="bg-white text-black m-2"
          value={item}
          onChange={addItem}
          placeholder="Enter item"
        />
        <input
          type="number"
          className="bg-white text-black m-2"
          value={price}
          onChange={addPrice}
          placeholder="Enter price"
        />
        <button onClick={createList} className="bg-white text-black">
          Confirm
        </button>
      </div>

      <div className="m-4">
        <p>Total Amount: {userAmount}</p>
        <p>Spent: {expandAmount}</p>
        <p>Balance: {balanceAmount}</p>
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
