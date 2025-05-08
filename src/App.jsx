import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import Signup from './Pages/Signup';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men's clothing" />} />
        <Route path="/womens" element={<ShopCategory category="women's clothing" />} />
        <Route path="/kids" element={<ShopCategory category="jewelery" />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/products' element={<Product />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
