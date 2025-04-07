import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-4 px-2'>
            <img src="/src/assets/images/logo.svg" alt="" />
            <ul className='hidden sm:flex gap-6 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <button className='flex border-1 px-2 py-1 rounded-sm'>0 Coin <img src="/src/assets/images/coin.svg" alt="" /></button>
            </ul>
            <button className='sm:hidden flex border-1 px-2 py-1 rounded-sm'>0 Coin <img src="/src/assets/images/coin.svg" alt="" /></button>
        </div>
    );
};

export default Navbar;