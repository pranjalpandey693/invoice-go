import { useState } from 'react'
import Header from './components/header'
import Maindetails from './components/maindetails'
import Form from './components/form'


function App() {


  const [details,setdetails]= useState({

    sell_name:"",
    sell_address:"",
    sell_city:"",
    sell_state:"",
    sell_pincode:"",

    sell_PAN_No:"",
    sell_GST_reg:"",

    bill_name:"",
    bill_address:"",
    bill_city:"",
    bill_state:"",
    bill_pincode:"",
   
    ship_name:"",
    ship_address:"",
    ship_city:"",
    ship_state:"",
    ship_pincode:"",
 

    


})


   const [showinvoice,setshowinvoice] = useState(false)

  const handlePrint = () =>{
    window.print()
  }

  return (
    <>
   <main className='p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
   

    {showinvoice? (
    <>  <Header handlePrint={handlePrint}/>
    <Maindetails details={details}/>
   
 <button onClick={()=> setshowinvoice(false)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
transition-all duration-300 mb-5' >Edit information</button>
</>
    ): (
      <>
     <Form details={details} setdetails={setdetails}/>
       <button onClick={()=> setshowinvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
    transition-all duration-300 mb-5' >Preview invoice</button>
      </>
    )}

   </main>
    </>
  )
}

export default App
