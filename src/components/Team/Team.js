import React, { useState } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import Summary from '../Summary/Summary';
import './Team.css';
const Team = () => {
    const [player, setPlayer] = useState(data);
    const [addPlayer, setNewPlayer] = useState([]);

    const handleAddPlayer = (newPlayer) => {
        console.log('player added', newPlayer);
        const selectedPlayer = [...addPlayer, newPlayer];
        setNewPlayer(selectedPlayer);
    }
    return (
        <div className="players-container">
            <div className="player-container">
                        {
                            player.map(player => <Player
                                handleAddPlayer={handleAddPlayer}
                                player={player}
                                key={player.id}
                                ></Player>)
                        }

            </div>
            <div className="summary-container">
                <div className="summary-heading">
                    <h3>Players In The Team:{addPlayer.length}</h3>
                </div>
                <div className="added-player">
                    <Summary addPlayer={addPlayer}></Summary>
                </div>
            </div>
        </div>
    );
};

export default Team;