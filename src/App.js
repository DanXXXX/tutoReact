import React, { Component} from 'react';
import Mycars from './components/Mycars';

import './App.css';
;

class App extends Component {
  

  state = {
    titre: "Mon catalogue Voitures"
  }


  changeTitle = (e) => {
    this.setState({
      titre: 'Voici mon nouveau Titre'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre: titre
    })
    
  }


  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
    this.setState({titre: e.target.value})
  }

  render () {
      return (
          <div className="App">
            
              <Mycars title={this.state.titre }/>
              
              <button onClick={this.changeTitle} className="btn"> changer le nom en dur </button>
              <button onClick={() => this.changeViaParam('Titre via un param')} className="btn"> Via param</button>
              <button onClick={ this.changeViaBind.bind(this,'Titre via un Bind')} className="btn"> Via Bind</button>
              <input type="text" onChange={this.changeViaInput} value={this.state.titre} />
          </div>
        );
      
  }
  
}

export default App;
