import React from 'react';
import './DishItem.css';

const DishItem = (props) => {
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} className="card-img-top" alt='dish'/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.cost} som</p>
                </div>
        </div>
    );
};

export default DishItem;