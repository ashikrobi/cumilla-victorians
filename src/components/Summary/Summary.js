import React from 'react';
import './Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Summary = (props) => {
    console.log(props);
    return (
        <div className='summary'>
            <h5>Name: </h5>
            <h6>Salary: $</h6>
        </div>
    );
};

export default Summary;