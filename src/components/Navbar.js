import React,{useState} from 'react';
import '../Style/Navbar.css';

export default function Navbar() {
  const [ismobile, setIsmobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Shortly</h2>
        <ul
          className={ismobile ? 'navbar-links-mobile' : 'navbar-links'}
          onClick={() => setIsmobile(false)}
        >
          <li className="features">Features</li>
          <li className="pricing">Pricing</li>
          <li className="resource">Resource</li>
          <li className="login">Login</li>
          <li className="signup">SignUp</li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!ismobile)}
        >
          {ismobile ? (
           <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
          ) : (
            <img src="https://img.icons8.com/material-outlined/24/000000/menu.png"/>
          )}
        </button>
      </nav>
    </>
  );
}
