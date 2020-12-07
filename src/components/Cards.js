import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


export default function Cards() {
    return (
        <div className='cards'>
            <h1>EPIC</h1>
          <div className="card__container">
              <div className="card__wrapper">
                  <ul className="cards__items">
<CardItem 
src="images/img-9.jpg"
text="ella rock adventure peack"
label="adventure"
path="/services"

/>

<CardItem 
src="images/img-2.jpg"
text="ella rock adventure peack"
label="adventure"
path="/services"

/>
</ul>
<ul className="cards__items">
<CardItem 
src="images/img-3.jpg"
text="ella rock adventure peack"
label="adventure"
path="/services"

/>
<CardItem 
src="images/img-4.jpg"
text="ella rock adventure peack"
label="adventure"
path="/services"

/>
<CardItem 
src="images/img-8.jpg"
text="ella rock adventure peack"
label="adventure"
path="/services"

/>
                  </ul>




              </div>
              
              
              </div> 

            
        </div>
    )
}
