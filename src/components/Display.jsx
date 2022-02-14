
import React, { Component } from 'react';
import Singers from './Singers';

class Display extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="title">Musiciens</h1>
                <Singers name="Michael Jackson" age="50"  />
                <Singers name="Prince" age="50"  />
                <Singers name="Dr Dre" age="54"  />
                <Singers name="Eminem" age="47"  />
            </div>
         );
    }
}
 
export default Display;