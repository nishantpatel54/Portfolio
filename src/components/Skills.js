import React from 'react';
import Card from './Card.js';
import data from './data.js';
function Skills(){
    const cardElements = data.skills.map(card =>{
        return <Card
        img={card.source}
        title = {card.title}
        />
      });
    return (
        <section className="cards-list">
            {cardElements}
        </section>
    
    )
}

export default Skills