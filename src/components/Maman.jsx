/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Toto from './Toto';


class Maman extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        messageMaman: null,
        messageToto: null,
     }

     ordreMaman = () => {
        this.setState({
            messageMaman: "Va ranger ta chambre !!!!"
        })
     }

     reponseToto = () => {
        this.setState({
            messageToto: "Oui Maman, j'y vais tous de suite"
        })
        console.log('fonction activeted !!!!');
     }

    render() { 
        return ( 
            <div className='parent'>
                <h2 className="darone">Maman</h2>
                <button onClick={this.ordreMaman} className="btn">Ordre de la mère</button>
                <p className="para">{ this.state.messageMaman} </p>
                <hr />

                <Toto name= "Toto" leState={this.state} reponseDuFils={this.reponseToto}/>
            </div>
         );
    }
}
 
export default Maman;