import React, { Component } from 'react';
import Carousel from './Carousel';

class Hobbies extends Component {
  render() {

    if(this.props.data){
      
      var hobbies = this.props.data.hobbies.map(function(hobby){
        let pictures = []
        // for (let i=1; i<6; i++){
        //   let picture = `hobby.picture${i}`
        //   pictures.push(`images/hobbies/${picture}.jpg`);
        //   console.log(`images/hobbies/${picture}.jpg`)
        // }
        pictures.push('images/hobbies/'+hobby.picture1)
        pictures.push('images/hobbies/'+hobby.picture2)
        pictures.push('images/hobbies/'+hobby.picture3)
        pictures.push('images/hobbies/'+hobby.picture4)
        pictures.push('images/hobbies/'+hobby.picture5)
      
        return  <li key={hobby.text}>
            <div className="hobbies">
               <h3>{hobby.hobbyName}</h3>
               <h4>{hobby.text}</h4>
               <Carousel className="hobbies" pictures = {pictures}/>
            </div>
         </li>
      })
    }

    return (
      <section id="hobbies">
          <div className="text-container">
            <div>
               <h1 className="hobbies"><span>Aficiones</span></h1>
            </div>
                <ul className="hobbies">
                  {hobbies}
              </ul>
         </div>
      </section>
    );
  }
}

export default Hobbies;
