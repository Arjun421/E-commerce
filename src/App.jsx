import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import Signup from './Pages/Signup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Terms from './Pages/Terms';
import Return from './Pages/Return';
// import ContactUs from './Pages/ContactUs';

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
        <Route path='/about' element={<About />}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Return />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
