import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
const Player = (props) => {
    console.log(props.player.img);
    const [name, salary] = [props.player.name, props.player.salary];
    return (
        <div className='player'>
            <div className='photo'>
                <img src={props.player.img} alt=""/>
            </div>
            <div>
                <h5>{name}</h5>
                <h6>{props.player.position}</h6>
                <h6>Salary:${salary}</h6>
                <Button variant="success">Add Player</Button>
            </div>
        </div>
    );
};

export default Player;