import React,{useState} from 'react';
import '../Style/Navbar.css';

export default function Navbar() {
  const [ismobile, setIsmobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Shortly</h2>
        <ul className={ismobile ? 'navbar-links-mobile' : 'navbar-links'}
          onClick={() => setIsmobile(false)}>
          <li className="nav-li">Features</li>
          <li className="nav-li">Pricing</li>
          <li className="nav-li">Resource</li>
          {ismobile && <p className='border-bottom'></p>}
          <li className="nav-li">Login</li>
          <li className="nav-li"><button className='signup-btn'>SignUp</button></li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!ismobile)}>
          {ismobile ? (<i className="fas fa-times"></i> ) : 
            (<i className="fas fa-bars"></i>)
          }
        </button>
      </nav>
    </>
  );
}
