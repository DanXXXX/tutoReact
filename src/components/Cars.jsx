import React, { Fragment } from "react";

const Car = (/* props */ { nom, color, year }) => {

  const  colorinfo = color ? ( ` ${ color } `) : ('color: Néant');
  
  if (nom) {
    return (
          <Fragment className="background-color__car">
                {/*
                    // utilisation de props 
                      <p>Marque: {props.children} </p>
                      <p>Couleur: {props.color} </p>
              */}
                <tr>
                    <td><p> { nom } </p></td>
                    <td><p> {year} </p></td>
                    <td>{ colorinfo }</td>
                </tr>
          </Fragment>
    );
  } else {
      return null;
  }
  
  
};

export default Car;
