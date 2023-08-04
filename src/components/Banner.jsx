import React from 'react';
import banner from '../assets/images/banner_1.png'

const Banner = () => {
    return (
        <div className='mt-4'>
            <img className='w-full md:w-full absolute' src={banner} alt="" />
            <div className='relative text-center align-center object-cover pt-[213px] pb-[213px] text-white lg:bg-[rgba(0,0,0,0.45)]'>
                    <h2 className='text-[12px] lg:text-5xl font-bold'>Taste Our Delicious <br/> Best Foods</h2>
                    <p className='mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority <br/> have suffered alteration in some form, by injected humou.</p>
                    <input className='mt-2 rounded p-2' type="text" placeholder='search any food' />
                </div>
            
        </div>
    );
};

export default Banner;