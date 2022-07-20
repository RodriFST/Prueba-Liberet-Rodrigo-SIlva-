import React from 'react';
import carrito from '../img/carrito.png';
import user from '../img/user.png';
import menu from "../img/menu.png";
import {Link} from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
  
    <div className='navbar-links'>
        <ul>
          <Link to='/shop'><img src={carrito}></img></Link>
          <Link to='/'><img src={menu}></img></Link>
          <Link to='/categories'><img src={user}></img></Link>
        </ul>
    </div>
    </div>
  )
}
export default Navbar
