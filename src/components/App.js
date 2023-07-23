import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


  const [isDarkMode, setIsDarkMode] = useState(false);
  const [addCart, setAddCart] = useState(false)


  const handleDarkModeToggle = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };
  const handleCart = () => {
    setAddCart(true);
  };



  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} add={handleCart} />
    </div>
  );
}

export default App;
