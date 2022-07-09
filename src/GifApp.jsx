import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleClick = () => {
    setCategories([]) 
  }

  const handleDeleteCategory = (categoryToDelete) => {
    const result = categories.filter(category => category !== categoryToDelete)
    setCategories(result)
  }


  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      <div className="search">
        {/* Input */}
        <AddCategory addCategory={handleAddCategory} />
        
        {
          categories.length > 0 &&
          <button onClick={handleClick}>Reset</button>
        }
      
      </div>
      
      
      {/* Listado de Gif */}
      {
      categories.map((category) => (
        <GifGrid 
        key={category} 
        category={category}
        deleteCategory={handleDeleteCategory} 
        />
      ))
      }
    </>
  );
};