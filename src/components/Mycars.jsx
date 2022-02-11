import React, { Component } from 'react';
import Car from './Cars';

export class Mycars extends Component {

 state = {
      voitures: [
        {name: " Royce Rolls", color: " black", year: "2000"},
        {name: " ferrari", color: " red", year: "2015" },
        {name: " Tesla", color: " bleu", year: "2021" },
      ],

      titre: "Mon catalogue Voitures 2",
 }

 addTenYears = (e) => {
   const updatedState = this.state.voitures.map((param) => {
     return param.year -= 10;
   })

  this.setState({
      updatedState
  })
 }

  render() {

      const year = new Date().getFullYear();
      
    return (
          <div className='cars'>
                
                <h2 className='title'>{this.state.titre}</h2>
                
                <button onClick={this.addTenYears} className="btn"> + 10 ans </button>
                
               
                {
                  this.state.voitures.map((voiture, index) => {
                    return (
                      <div key={index} className="mapper">
                          <Car nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans' }/>

                      </div>
                    )
                  })
                }
           
          </div>
          )
  }
}

export default Mycars;
