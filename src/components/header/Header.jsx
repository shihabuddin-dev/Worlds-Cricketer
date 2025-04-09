import React from 'react';

const Header = ({ handleClaimCoin }) => {
    return (
        <div className='container mx-auto text-center mt-4 py-12 bg-black rounded-lg space-y-4'>
            <img className='mx-auto w-38 md:w-52' src="images/hero-img.png" alt="" />
            <h2 className='text-white text-3xl md:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-2xl text-[#FFFFFFB3] font-medium'>Beyond Boundaries Beyond Limits</p>
            <span className='px-1 py-5 border-2 border-pink-300 rounded-xl'>
                <button
                    onClick={handleClaimCoin}
                    className='bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-300 '>Claim Free Credit</button>
            </span>
        </div>
    );
};

export default Header;