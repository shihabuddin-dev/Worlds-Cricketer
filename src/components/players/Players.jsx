import React, { use } from 'react';
import Player from '../player/Player';

const Players = ({ playersPromise, handleSelectedPlayers }) => {
    const players = use(playersPromise)

    return (
        <div className='container mx-auto mt-2 px-2'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                {
                    players.map(player =>
                        <Player
                            handleSelectedPlayers={handleSelectedPlayers}
                            key={player.id}
                            player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;