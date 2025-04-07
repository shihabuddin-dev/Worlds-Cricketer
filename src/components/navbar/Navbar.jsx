import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto flex items-center mt-4 px-2'>
            <div className='flex flex-1'>
                <img src="/src/assets/images/logo.svg" alt="" />
            </div>
            <ul className='hidden sm:flex gap-6 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <button className='flex border-1 ml-4 px-2 py-1 rounded-sm'>0 Coin <img src="/src/assets/images/coin.svg" alt="this is coin"/></button>
        </div>
    );
};

export default Navbar;