import { Route, Routes, useLocation } from 'react-router-dom';
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
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Support from './Pages/Support';
import { CartProvider } from './Context/CartContext';  
import Feedback from './Pages/Feedback';
import Checkout from './Pages/Checkout';
import { Login } from './Pages/Login';
function App() {
  const location = useLocation();

  // Determine if current path is /cart
  const hideFooter = location.pathname === '/cart' || location.pathname==='/feedback';

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men's clothing" />} />
          <Route path="/womens" element={<ShopCategory category="women's clothing" />} />
          <Route path="/jewelery" element={<ShopCategory category="jewelery" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/products" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/returns" element={<Return />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logins" element={<Login />} />

        </Routes>

        
        {!hideFooter && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
