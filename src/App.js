import React, { Component} from 'react';
import Display from './components/Display';

// import Maman from './components/Maman';
// import Mycars from './components/Mycars';
import './App.css';
;

class App extends Component {
  
  render () {
      return (
          <div className="App">
            
              {/* <Mycars /> */}
              {/* <Maman /> */}
              <Display />
              
          </div>
        );
      
  }
  
}

export default App;
