import React from 'react'
import Navbar from '../navbar/Navbar'
import "../cart/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { removing, updating } from '../features/CartRedux';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const cartItem = useSelector((state)=>state.carts)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const removeFromCart = (item)=>{
        dispatch(removing({id:item.id}))
    }

    const am = (val,item)=>{
        if(val==="minus"){
            if(item.quantity<2){
                removeFromCart(item)
            }else{
                dispatch(updating({id:item.id, 
                    name:item.name, 
                    price:item.price,
                    image:item.image,
                    quantity:item.quantity-1,
                    total:item.price*(item.quantity-1)}))
            }
            
        }else if(val==="plus"){
            dispatch(updating({id:item.id, 
                name:item.name, 
                price:item.price,
                image:item.image, 
                quantity:item.quantity+1,
                total:item.price*(item.quantity+1)}))
        }
    }

    // if (loading) {
    //     return <ReactLoading type={"spin"} color={"blue"} height={500} width={350} className='loading' />;
    //   }


  return (
    <div className='cart'>
        <Navbar  length={cartItem.carts.length} />
      <div className='cartItems'>
        <tr className='heads'>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Remove</th>
        </tr>
        {cartItem.carts.map((item)=>{
            return(
            <div className='cartContainer' key={item.id}>
           <tr className='cartContainer'>
            <td> {item.name}</td>
            <td>Rs {item.price}</td>
            <td><img  className='picture' alt='vegetables'
              src={`http://127.0.0.1:8000${item.image}`}
               /></td>
               <td className='quantityButton'>
                <button className='minus' onClick={()=>am("minus",item)}><CiSquareMinus /> </button>
                <p className='value'>{item.quantity}</p>
                <button className='plus' onClick={()=>am("plus",item)} > <CiSquarePlus /></button>
                </td>
                <td>{item.total}</td>
               <td><FaShoppingCart className="active activeButton"  onClick={()=>removeFromCart(item)} /></td>
        </tr>
              </div>
            )
        })}
        <button className='generateBill' onClick={()=>navigate("/bill")}>Generate Bill</button>
      </div>
    </div>
  )
}

export default Cart
