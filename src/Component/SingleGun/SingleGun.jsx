import React, { useEffect } from 'react';

const SingleGun = ({countIncrease,gun}) => {
  const { name, img,action,price,category,bullet,capacity} = gun
 
 
  return (
    <div className="card w-full bg-base-100 shadow-xl my-10">
      <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{action}</div>
        </h2>
        <h3 className='font-bold'>Price- ${price}</h3>
        <h2 className='font-bold'>Category- {category}</h2>
        <h3 className='font-bold'>Bullet- {bullet}</h3>
        <h3 className='font-semibold'>Capacity-{capacity}</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions mt-4">
        <button onClick={()=>countIncrease()} className="btn btn-sm btn-primary">Add to Cart</button>
          {/* <button className="btn btn-sm btn-secondary" onClick={() => window.my_modal_4.showModal()}>Details</button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleGun;