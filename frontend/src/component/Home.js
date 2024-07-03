import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { getGroceries } from '../features/Connect';
import "../component/Home.css";
import ReactLoading from 'react-loading';
import Navbar from '../navbar/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { adding, removing } from '../features/CartRedux';


const Home = () => {

  const dispatch = useDispatch();
  const [activeItems, setActiveItems] = useState({});
  const { groceries, loading } = useSelector((state) => state.user);
  const cartItem = useSelector((state)=>state.carts)
  const [searchItem,setSearchItem] = useState("")
  
  useEffect(() => {
    dispatch(getGroceries());
  }, []);


  const handleCartClick = (item) => {
    setActiveItems((prevState) => {
      const isActive = !prevState[item.id];
      if (isActive) {
        dispatch(adding({id:item.id, 
          name:item.name, 
          price:item.price,
          image:item.image,
          quantity:1,
          total:item.price,
          class:"active"
        }))
        toast.success('Added to cart successfully!', {
          position: "top-right",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        dispatch(removing({id:item.id}))
        toast.error('Removed from cart successfully!', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
      return {
        ...prevState,
        [item.id]: isActive,
      };
    });
  };

  const filteredGroceries = groceries.filter(item =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );
 

  if (loading) {
    return <ReactLoading type={"spin"} color={"blue"} height={500} width={350} className='loading' />;
  }

  
  return (
    <div className='items'>
      <ToastContainer limit={1} />
      
      <Navbar  length={cartItem.carts.length} setSearchItem={setSearchItem} searchItem={searchItem} />
      <div className='groceries'>
      {filteredGroceries.map((item) => {
        return(
          <div className='container' key={item.id}>
           
            <img  className='vegetables'
          src={`http://127.0.0.1:8000${item.image}`}
           />
         <div className='describe'>
         <p>Name: {item.name}
          <br>
          </br>
          Price: Rs {item.price}
         </p>
         <div className='itemButton'>

           <FaShoppingCart className={activeItems[item.id] ? "active" : ""} onClick={()=>handleCartClick(item)} />
         </div>
         </div>
          </div>
        )    
})}
      </div>
      
    </div>
  );
};

export default Home;
