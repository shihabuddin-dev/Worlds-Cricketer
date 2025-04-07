import React, { use } from 'react';
import Player from '../player/Player';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise)

    return (
        <div className='container mx-auto mt-4 px-2'>
            <div className='flex justify-between gap-2 flex-col md:flex-row items-center py-4'>
                <h2 className='text-xl md:text-2xl font-bold'>Available Players</h2>
                <div>
                    <button className='bg-[#E7FE29] border-1 border-gray-400 px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-r-none'>Available</button>
                    <button className=' border-1 border-gray-400 px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-md rounded-l-none'>Selected 0</button>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>

        </div>
    );
};

export default Players;