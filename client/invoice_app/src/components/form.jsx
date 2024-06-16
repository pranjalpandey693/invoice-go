import React, { useState } from 'react';

export default function Form({details,setdetails}) {

   

     const handlechange =(e)=>{
        const {name,value} = e.target
        setdetails((prev)=>{
            return { ...prev,[name]: value}
        })
     }

     const handlesubmit = (e) =>{
        e.preventDefault()
        console.log(details)
     }

  return (
    <>
    <form onSubmit={handlesubmit}>
        <h4 className='font-bold'>Seller Details:</h4>
  <label htmlFor="name">name</label>
  <input 
    type='text'
    name='sell_name'
    id='name'
    onChange={handlechange}
/>
  <label htmlFor="address">address</label>
  <input 
    type='text'
    name='sell_address'
    id='address'
    onChange={handlechange}
/>

  <label htmlFor="city">city</label>
  <input 
    type='text'
    name='sell_city'
    id='city'
    onChange={handlechange}
/>
  <label htmlFor="state">state</label>
  <input 
    type='text'
    name='sell_state'
    id='state'
    onChange={handlechange}
/>
  <label htmlFor="pincode">pincode</label>
  <input 
    type='text'
    name='sell_pincode'
    id='pincode'
    onChange={handlechange}
/>
  <label htmlFor="PAN_No">PAN No</label>
  <input 
    type='text'
    name='sell_PAN_No'
    id='PAN_No'
    onChange={handlechange}
/>
  <label htmlFor="GST_reg">GST reg</label>
  <input 
    type='text'
    name='sell_GST_reg'
    id='GST_reg'
    onChange={handlechange}
/>
      
      
        <h4 className='font-bold'>Billing Details:</h4>
  <label htmlFor="name">name</label>
  <input 
    type='text'
    name='bill_name'
    id='name'
    onChange={handlechange}
/>
  <label htmlFor="address">address</label>
  <input 
    type='text'
    name='bill_address'
    id='address'
    onChange={handlechange}
/>

  <label htmlFor="city">city</label>
  <input 
    type='text'
    name='bill_city'
    id='city'
    onChange={handlechange}
/>
  <label htmlFor="state">state</label>
  <input 
    type='text'
    name='bill_state'
    id='state'
    onChange={handlechange}
/>
  <label htmlFor="pincode">pincode</label>
  <input 
    type='text'
    name='bill_pincode'
    id='pincode'
    onChange={handlechange}
/>

     
     
        <h4 className='font-bold'>Shipping Details:</h4>
  <label htmlFor="name">name</label>
  <input 
    type='text'
    name='ship_name'
    id='name'
    onChange={handlechange}
/>
  <label htmlFor="address">address</label>
  <input 
    type='text'
    name='ship_address'
    id='address'
    onChange={handlechange}
/>

  <label htmlFor="city">city</label>
  <input 
    type='text'
    name='ship_city'
    id='city'
    onChange={handlechange}
/>
  <label htmlFor="state">state</label>
  <input 
    type='text'
    name='ship_state'
    id='state'
    onChange={handlechange}
/>
  <label htmlFor="pincode">pincode</label>
  <input 
    type='text'
    name='ship_pincode'
    id='pincode'
    onChange={handlechange}
/>
  <label htmlFor="orderno">order no</label>
  <input 
    type='number'
    name='order_no'
    id='orderno'
    onChange={handlechange}
/>
  <label htmlFor="orderdate">order date</label>
  <input 
    type='date'
    name='orderdate'
    id='orderdate'
    onChange={handlechange}
/>
  <label htmlFor="invoiceno">invoice no</label>
  <input 
    type='number'
    name='invoice_no'
    id='invoiceno'
    onChange={handlechange}
/>
  <label htmlFor="invoicedetails">invoice details</label>
  <input 
    type='text'
    name='invoice_details'
    id='invoicedetails'
    onChange={handlechange}
/>
  <label htmlFor="invoicedate">invoice date</label>
  <input 
    type='date'
    name='invoice_date'
    id='invoicedate'
    onChange={handlechange}
/>


<button type='submit'>submit</button>
</form>  
    </>
  );
}
