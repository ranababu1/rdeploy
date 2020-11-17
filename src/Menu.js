import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <div className="container nav-wrapper">
            <Link className="logo hide-on-med-and-down" to="/">Imraan's Blog</Link>
                <ul id="nav-mobile" class="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li> 
                    <li><Link to="/blog">Blog</Link></li> 
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu;


