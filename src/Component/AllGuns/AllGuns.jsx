import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';



const AllGuns = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl lg:text-6xl my-6'>Welcome to <samp className='text-orange-400'>Fake Guns Store</samp></h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis cumque totam voluptatum perspiciatis illum eaque tempore nihil assumenda magni velit?</p>

            <div className=' w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    guns.slice(0, 6)?.map(gun => <SingleGun
                        key={gun.id}
                        gun={gun}
                        countIncrease={countIncrease}
                    ></SingleGun>)
                }
            </div>
        </div>
    );
};

export default AllGuns;