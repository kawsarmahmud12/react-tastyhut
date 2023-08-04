import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between px-[120px] mt-4'>
            <h2 className='font-bold text-2xl mt-2'>Tasty HUT</h2>
            <button className='bg-[#FFC107] font-bold text-2xl p-4 rounded'>Sign Up</button>
        </div>
    );
};

export default Header;