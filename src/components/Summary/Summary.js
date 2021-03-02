import React from 'react';
import './Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Summary = (props) => {
    const players = props.addPlayer;
    console.log(props.addPlayer);
    return (
        <div className='summary'>
        {
            players.map(player =>{
                return (                    
                    <div>
                        <h5>{player.name} </h5>
                        <h6>Salary: {player.salary}</h6>
                    </div>
                )
            })
        }
        </div>
    );
};

export default Summary;