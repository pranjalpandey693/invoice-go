import React from 'react';

export default function Maindetails({details}) {
  return (
  <>
   <section className='flex justify-between'>
       <div className='flex flex-col justify-start items-start'>
        <h4 className='font-bold'>Sold by:</h4>
        <p>{details.sell_name}</p>
        <p>address Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
      
       </div>
       
       <div className='flex flex-col items-end  justify-end '>
       <h4 className='font-bold'>Billing Details</h4>
        <p>name</p>
        <p>address Lorem, ipsum dolor sit amet consectetur </p>
        <h4 className='font-bold'>state/UT code:</h4>
       </div>
    </section>

     <div>
      <p className='font-bold'>pan no:</p>
      <p className='font-bold'>pan no:</p>
     </div>

     <div>
     <div className='flex flex-col items-end  justify-end my-5'>
       <h4 className='font-bold'>Shipping Address:</h4>
        <p>name</p>
        <p>address Lorem, ipsum dolor sit amet consectetur </p>
        <h4 className='font-bold'>state/UT code:</h4>
       </div>
     </div>

     <section className='flex  justify-between'>
     <div className='flex flex-col justify-start items-start'>
        <ul>
          <li><span className='font-bold'>Order number:</span>1234</li>
          <li><span className='font-bold'>Order date:</span>2324</li>
        </ul>
      
       </div>
       
       <div className='flex flex-col items-end  justify-end  '>
       <ul>
          <li><span className='font-bold'>invoice:</span>1234</li>
          <li><span className='font-bold'>invoice:</span>1234</li>
          <li><span className='font-bold'>invoice:</span>1234</li>
        
        </ul>
       </div>
     </section>
  </>
  );
}
