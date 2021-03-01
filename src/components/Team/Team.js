import React, { useState } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import Summery from '../Summery/Summery';
import './Team.css';
const Team = () => {
    const [player, setPlayer] = useState(data);
    return (
        <div className="players-container">
            <div className="player-container">
                        {
                            player.map(player => <Player player={player}></Player>)
                        }

            </div>
            <div className="summery-container">
                <h3 id="summery-heading">Players In The Team:</h3>
                {
                    player.map(player => <Summery player={player}></Summery>)
                }
            </div>
        </div>
    );
};

export default Team;