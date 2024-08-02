
import './App.css';

import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUS from './pages/ContactUs'
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirmation from './pages/OrderConfirmation';
import Cart from './pages/Cart';



import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>



      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Orderconfirmation' element={<OrderConfirmation />} />

      </Routes>
    </div>


  );
}

export default App;
