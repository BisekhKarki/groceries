import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import "../component/Bill.css";

const Bill = () => {
    const cartValue  = useSelector((state)=>state.carts);
    const navigate = useNavigate();
   
    const [totalA,setTotal] = useState(0)


    useEffect(()=>{
        let totalVal = 0
        cartValue.carts.forEach((item)=>{
            totalVal+=item.total
        })
        setTotal(totalVal)    
            
    },[])


    

  return (
    <div className='amount'>
        
      <div className='bill'>
      <h1>Total Bill</h1>
      <tr className='billHead'>
        <th>Name</th>
        <th>Price/Quantity</th>
        <th>Quantity</th>
        <th>Total Amount</th>
    </tr>
        {
            cartValue.carts.map((item)=>{
                return(
                    <tr className='totalBill' key={item.id}>
                    <td>{item.name} </td>
                    <td className='p'>{item.price} </td>
                    <td className='q'>{item.quantity} </td>
                    <td>{item.total}</td>
                    </tr>  
                )
            })
        }
        <p className='ta'>Your total amount is: Rs {totalA}</p>
      </div>
      <button className='backCart' onClick={()=>navigate("/cart")}>Back</button>
    </div>
  )
}

export default Bill
