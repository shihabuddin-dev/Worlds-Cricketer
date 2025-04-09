import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa";

const Player = ({ player, handleSelectedPlayers, handleAddPlayer }) => {
    const { image_url, name, country, role, batting_style, price
    } = player;
    const [selectedPlayer, setSelectedPlayer] = useState(false)
    const handleSelectedPlayer = () => {
        setSelectedPlayer(true)
        handleSelectedPlayers()
        handleAddPlayer(player)
        // {
        //     claimCoin===0 && <h3>aa</h3>
        // }

    }
    return (
        <div className='container mx-auto mt-4 px-2'>
            <div className='p-3 border-1 border-[#1313131A] rounded-lg space-y-2'>
                <img className='rounded-lg' src={image_url} alt="" />
                <h2 className='flex gap-2 items-center text-lg font-semibold'><span><FaUser /></span> {name}</h2>
                <div className='flex justify-between '>
                    <p className='flex gap-2 items-center text-gray-600 font-semibold'> <span><FaFlag /></span>{country}</p>
                    <button className='bg-[#13131313] px-2 py-1 rounded-md hover:bg-[#E7FE29]'>{role}</button>
                </div>
                <hr className='border-1 border-[#1313131A]' />
                <div className='flex justify-between'>
                    <p className='font-semibold'>Batting Style</p>
                    <p className='border-[#1313131A]'>{batting_style}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold'>Price: ${price}</p>
                    <button
                        disabled={selectedPlayer ? true : false}
                        onClick={handleSelectedPlayer}
                        className={`${selectedPlayer && 'bg-[#E7FE29]'} border-1 border-gray-300 px-2 py-1 rounded-md hover:bg-[#E7FE29] cursor-pointer`}>{selectedPlayer ? 'Selected' : 'Chose Player'}
                    </button>
                </div>

            </div>

        </div >
    );
};

export default Player;