import React from 'react';

const Food = ({food}) => {
    const {title,body,img,id} = food;
    return (
        <div>
            <div className='border-2 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2'>
               <img className=' lg:w-[250px] lg:h-[250px]' src={img} alt="" />
                <div className='ml-2'>
                   <h3 className='mt-8 text-[#403F3F] font-bold text-2xl'>{title}</h3>
                   <p className='text-[#706F6F] text-[14px] mt-2 mb-3'>{body}</p>
                   <button className='text-[#FFC107] underline'>View Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default Food;