import React, { useState } from "react";

function App() {
  const [inputtext,setText]= useState("");
  const [items, setItems]=useState([]);
  
  function handleChange(event){
    const newvalue=event.target.value;
    setText(newvalue);
  }
  function addItem(){
    setItems((prevItems)=>{
      return [...prevItems,inputtext];
    });
    setText('');
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputtext} type="text" onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) =><li>{todoitem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;



