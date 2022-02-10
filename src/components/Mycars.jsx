import React, { Component } from 'react';
import Car from './Cars';

export class Mycars extends Component {

  noCopy = () => {
      alert('merci de ne pas copier le texte')
  }

  addStyle = (e) => {
    if (e.target.classList.contains('title')) {
      e.target.classList.remove('title');

    } else {
      e.target.classList.add('title');
      
    }
  }

  render() {
    return (
            <div className='cars'>
                
                <h2 onMouseOver={this.addStyle} className='title'>{this.props.title}</h2>
                
                <p onCopy={this.noCopy} className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium pariatur quas natus nam voluptatibus! Harum delectus doloribus eligendi maxime, quia quod assumenda ea numquam recusandae odit voluptas libero distinctio consectetur sapiente magni consequuntur enim nulla facere vitae officiis illo perspiciatis. Necessitatibus quae impedit esse et molestiae hic numquam in magnam.</p>
                
                <Car color="red"></Car>
                <Car>ferrari</Car>
                <Car color="vert">Tesla</Car>
           </div>
          )
  }
}

export default Mycars;
