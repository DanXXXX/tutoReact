import React, { Component} from 'react';
import Maman from './components/Maman';
// import Mycars from './components/Mycars';

import './App.css';
;

class App extends Component {
  
  render () {
      return (
          <div className="App">
            
              {/* <Mycars /> */}
              <Maman />
              
          </div>
        );
      
  }
  
}

export default App;
