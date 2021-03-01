import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
const Player = (props) => {
    // console.log(props);
    const [name, salary, img, position] = [props.player.name, props.player.salary, props.player.img, props.player.position];
    return (
        <div className='player'>
            <div className='photo'>
                <img src={img} alt=""/>
            </div>
            <div>
                <h5>{name}</h5>
                <h6>{position}</h6>
                <h6>Salary:${salary}</h6>
                <Button variant="success"
                onClick={() => props.handleAddPlayer(props.player)}>Add Player</Button>
            </div>
        </div>
    );
};

export default Player;