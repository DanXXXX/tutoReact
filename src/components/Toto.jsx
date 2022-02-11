/* eslint-disable no-useless-constructor */
import React from 'react';


const  Toto = props => {

    

   const btnReponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponseDuFils} className="btn btn-reponse">réponse</button>) : (<button disabled className="btn btn-reponse">réponse</button>);

   
    return (
        <div className="enfant">
            <h2 className="title__enfant">{props.name} </h2>
                {btnReponseToto}

                <p className="para2">{props.leState.messageToto} </p>
        </div>
      );
}

export default Toto;