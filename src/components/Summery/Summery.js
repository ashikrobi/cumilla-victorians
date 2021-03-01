import React from 'react';
import './Summery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Summery = (props) => {
    console.log(props.player);
    const [name, salary] = [props.player.name, props.player.salary];
    return (
        <div className='summery'>
            <h5>Name:{name}</h5>
            <h6>Salary:{salary}</h6>
        </div>
    );
};

export default Summery;