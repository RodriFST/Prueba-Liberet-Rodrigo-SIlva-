import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);




  
  const homeImages= useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
      .then((res) => {
        console.log('home',res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);




  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      });
  }, []);



  return (
    <myContext.Provider
      value={{
        homeImages,
        meals,
        fetchCategories,
        categories,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
