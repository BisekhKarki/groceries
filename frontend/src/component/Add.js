import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css';
import { useDispatch } from 'react-redux';
import { postGroceries } from '../features/Connect';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ReactLoading from 'react-loading';

const Add = () => {
    const navigate = useNavigate();

    const addGroceries = () => {
        navigate("/home");
    };

    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);


    const dispatch = useDispatch()



    const added = (e)=>{
        e.preventDefault()
        dispatch(postGroceries({name:name,price:price}))
        toast.success('Added successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    // if(loading){
    //     return  <ReactLoading type={"spin"} color={"blue"} height={500} width={350} className='loading' />
    //   }


    return (
        <div className="add-container">
             <ToastContainer limit={1} />
            <form className="add-form" onSubmit={(e)=>added(e)}>
                <h1>Add Groceries</h1>
                <div className="form-group">
                    <label>Enter the ID: </label>
                    <input 
                        type="number" 
                        placeholder="ID" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Enter the Name: </label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Enter the Price: </label>
                    <input 
                        type="number" 
                        placeholder="Price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>
                <button type="submit" className="add-button">Add</button>
                <button type="button" onClick={addGroceries} className="back-button">Back</button>
            </form>
        </div>
    );
};

export default Add;
