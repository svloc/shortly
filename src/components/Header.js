import React from 'react';
import '../Style/Header.css';
export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-img">
          <img
            src="../it_guy.svg"
          />
        </div>
        <div className="header-content">
          <h1 className="header-title">More than just shorter links</h1>
          <p className="header-text">
            Build your brands recognition and get detailed insight on how your
            links are performing
          </p>
           <button className="header-button ">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
