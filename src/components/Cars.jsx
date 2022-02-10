import React from "react";

const Car = (/* props */ { children, color }) => {

  const  colorinfo = color ? ( <p>Couleur: { color } </p>) : (<p>Couleur: Néant</p>);
  
  if (children) {
    return (
      <div className="background-color__car">
        {/*
  
             // utilisation de props 
              <p>Marque: {props.children} </p>
              <p>Couleur: {props.color} </p>
  
       */}
  
  
        <p>Marque: { children } </p>
        { colorinfo }
      </div>
    );
  } else {
      return (
            <div className="background-color__car">
                <p>Pas de Data</p>
            </div>
      )
  }
  
  
};

export default Car;
