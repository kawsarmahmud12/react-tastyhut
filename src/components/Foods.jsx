import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(()=> {
        fetch('mealdb.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[]);

    return (
        <div className='mt-8'>
            <h2 className='text-center text-2xl font-bold'>Your Favourite Food</h2>
           <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-[120px] gap-8 mt-4'>
                {
                    foods.map(food => <Food
                        key={food.id}
                        food = {food}
                    ></Food>)
                }
           
           </div>
           <button className='bg-[#FFC107] mx-auto py-2 px-6 mt-8 mb-8 block'>show all</button>
        </div>
    );
};

export default Foods;