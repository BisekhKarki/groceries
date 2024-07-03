import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './component/Login';
import Home from './component/Home';
import Signup from './component/Signup';
import Forgot from './component/Forgot';
import Cart from './cart/Cart';
import Bill from './component/Bill';
// import Add from './component/Add';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup' element={<Forgot />} />
        {/* <Route path='/add' element={<Add />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/bill' element={<Bill />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
