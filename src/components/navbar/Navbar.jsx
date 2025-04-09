import React from 'react';

const Navbar = ({claimCoin}) => {
    return (
        <div className='container mx-auto flex items-center mt-4 px-2'>
            <div className='flex flex-1'>
                <img src="images/logo.svg" alt="logo images" />
            </div>
            <ul className='hidden sm:flex gap-6 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <button className='flex border-1 border-[#1313131A] ml-4 px-2 py-1 rounded-sm'>{claimCoin} Coin <img src="images/coin.svg" alt="this is coin" /></button>
        </div>
    );
};

export default Navbar;