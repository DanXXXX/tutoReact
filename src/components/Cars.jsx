import React from "react";

const Car = (/* props */ { nom, color, year }) => {

  const  colorinfo = color ? ( <p>Couleur: { color } </p>) : (<p>Couleur: Néant</p>);
  
  if (nom) {
    return (
      <div className="background-color__car">
        {/*
             // utilisation de props 
              <p>Marque: {props.children} </p>
              <p>Couleur: {props.color} </p>
       */}
  
        <p>Marque: { nom } </p>
        <p>Année: {year} </p>
        { colorinfo }
      </div>
    );
  } else {
      return null;
  }
  
  
};

export default Car;
