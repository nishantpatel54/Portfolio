import React from 'react';
function Card(props){
    return (
        <div className="card">
            <img src={props.img} className="card-image" />
            <figcaption className='card-title'> {props.title}</figcaption>
        </div>
    )
}

export default Card;
