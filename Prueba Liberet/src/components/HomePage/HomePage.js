import React, { useEffect, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
import clock from "../img/clock.png"


const HomePage = () => {

  const { homeImages, meals } = useContext(myContext);




  useEffect(() => {
    homeImages();
  }, [homeImages]);
  return (
    <div className="meals">
      {meals.map((HomePage) => (
         
         
          <div className="card" >
          <img className="food"src={HomePage.strMealThumb} alt="#" />
             <h4>{HomePage.strMeal}</h4>
            
               <img className='clock' src={clock}></img>
               <h2>${HomePage.idMeal}</h2>
          
                  </div>
  
      ))}
    </div>
  );
};

export default HomePage;
