import React, { useEffect, useState } from 'react';
import logo from "../images/enjoy.gif";
import "../component/login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../features/Connect';
import ReactLoading from 'react-loading';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);

    const getValue = (e) => {
        e.preventDefault();
        dispatch(checkUser({ username, password }));
       
    };

    useEffect(() => {
        if(users.access && users.refresh) {
            toast.success('Logged in successfully!', {
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
            setPassword("");
            setUsername("");
            navigate("/home");  
        } else if ( users.detail){
            toast.error('Invalid username or password', {
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
            setPassword("");
            setUsername("");
        }
    }, [users]);


    if(loading){
        return  <ReactLoading type={"spin"} color={"blue"} height={500} width={350} className='loading' />
      }

    return (
        <>
       
        <div className='login'>
        <ToastContainer limit={1} />
            <div className='loginContainer'>
                <h1>Welcome back</h1>
                <form className='inputContainer' onSubmit={(e) => getValue(e)}>
                    <div className='email'>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder='Ram'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='pass'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='cp'>
                        <div className='checking'>
                            <input type='checkbox' />
                            <span>Keep me logged In</span>
                        </div>
                        <div className='passwordForgot'>
                            <Link to={"/forgot"}>Forgot your password?</Link>
                        </div>
                    </div>
                    <div className='loginButton'>
                        <button type='submit'>Login</button>
                    </div>
                    <div className='underline'></div>
                    <div>
                        <span>Don't have an account? <Link to={"/signup"}>Sign up</Link></span>
                    </div>
                </form>
            </div>
            {loading && <ReactLoading type={"spin"} color={"blue"} height={400} width={250} />}
            <div className='image'>
                <img src={logo} alt='A employee' />
            </div>
        </div>
        </>
        
    );
};

export default Login;
