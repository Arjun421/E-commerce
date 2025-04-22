import React,{useState} from 'react'
import "./Navbar.css"
import logo from "../../assets/logowebp.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu,setMenu]=useState('home')
    
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img className='img1' src={logo} alt="logo" height="50px" />
            <p>Grabsy</p>
            
        </div>
        
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu('home')}}><Link style = {{textDecoration:'None',color:"#626262"}}to='/'>Home</Link> 
            {menu==='home' ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu('mens')}}><Link style = {{textDecoration:'None',color:"#626262"}} to='/mens'>Men</Link>
            {menu==='mens' ? <hr/> : <></>}
            </li>
            <li onClick={()=>{setMenu('womens')}}><Link style = {{textDecoration:'None',color:"#626262"}} to="/womens">Womens</Link>
            {menu==='womens' ? <hr/> : <></>}
            </li>
            <li onClick={()=>{setMenu('kids')}}><Link style = {{textDecoration:'None',color:"#626262"}} to='/kids'>Kids</Link>
            {menu==='kids' ? <hr/> : <></>}
            </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>SignUp</button></Link>
            
            <Link to='/cart'><img src={cart_icon} alt="icon" height="40px"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    
    </div>
  )
}
export default Navbar;
