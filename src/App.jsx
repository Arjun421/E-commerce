import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup';
import { Product} from './Pages/Product'
import Signup from './Pages/Signup';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/mens' element={<ShopCategory/>}/>
        <Route path='/womens' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
  
        


      </Routes>
     
     
      
    </div>
  );
};

export default App;