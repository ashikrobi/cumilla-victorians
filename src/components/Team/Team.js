import React, { useState } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import './Team.css';
const Team = () => {
    const [player, setPlayer] = useState(data);
    const [addPlayer, setNewPlayer] = useState([]);
    const handleAddPlayer = (newPlayer) => {
        console.log('player added', newPlayer);
    }
    return (
        <div className="players-container">
            <div className="player-container">
                        {
                            player.map(player => <Player
                                handleAddPlayer={handleAddPlayer}
                                player={player}
                                ></Player>)
                        }

            </div>
            <div className="summary-container">
                <div className="summary-heading">
                    <h3>Players In The Team:</h3>
                </div>
                <div className="added-player">
                </div>
            </div>
        </div>
    );
};

export default Team;