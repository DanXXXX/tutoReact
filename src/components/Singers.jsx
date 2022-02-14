
import React, { Component } from 'react';

class Singers extends Component {
    state = {  } 
    render() { 

        console.log(this.props);
                const {name, age} = this.props;
        return (
            <div>
                <p className="para">
        
                    Chanteur: {name} {age} ans
                </p>
            </div>
        );
    }
}
 
export default Singers;