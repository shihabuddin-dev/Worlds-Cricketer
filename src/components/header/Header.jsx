import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto text-center mt-4 py-12 bg-black rounded-lg space-y-4'>
            <img className='mx-auto w-38 md:w-52' src="/public/images/hero-img.png" alt="" />
            <h2 className='text-white text-3xl md:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-white text-xl font-medium'>Beyond Boundaries Beyond Limits</p>
            <span className='px-1 py-4 md:py-5 border-2 border-[#E7FE90] rounded-lg'>
                <button className='bg-[#E7FE29] px-3 md:px-5 py-2 md:py-3.5 font-bold rounded-lg '>Claim Free Credit</button>
            </span>
        </div>
    );
};

export default Header;