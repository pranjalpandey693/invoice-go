import React from 'react';
import logo from '/amazonin.svg'


export default function Header({handlePrint}) {
  return (
   <>
   {/* <button onClick={handlePrint} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
   transition-all duration-300 mb-5' >Print/Download</button> */}
   <header>
      <div className='flex  justify-between  mb-10'>
       <img src={logo} height={200} width={200} alt="logo image" />
       <div className='flex flex-col items-end justify-end'>
        <h2>Tax Invoice/Bill of Supply/Cash Memo</h2>
        <p>(Original for Recipient)</p>
       </div>

      </div>
    </header>
   
   </>
  );
}
