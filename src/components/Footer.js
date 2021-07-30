import React from 'react';
import '../Style/Footer.css';
export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="row">
          <div className="col-md-3 col-12">
            <h1 className="fw-bold shortlyH1">Shortly</h1>
          </div>

          <div className="col-md-2 col-12">
            <p className="fw-bold">Features</p>
            <ul className="list-unstyled">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div className="col-md-2 col-12">
            <p className="fw-bold">Resource</p>
            <ul className="list-unstyled ">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="col-md-2 col-12">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Our Team</li>
              <li>Carreers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3 col-12">
            <a
              className="btn btn-outline-light btn-floating m-2"
         
              role="button"
            >
             <img src="https://img.icons8.com/metro/26/000000/facebook.png"/>
           
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              
              role="button"
            >
               <img src="https://image.flaticon.com/icons/png/128/160/160194.png" style={{width: '20px', height: '24px'}} />
            </a>
        
            <a
              className="btn btn-outline-light btn-floating m-2"
            
              role="button"
            >
    
              <img src="https://image.flaticon.com/icons/png/128/80/80648.png" style={{width: '20px', height: '24px'}} />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-2"
              
              role="button"
            >
            <img src="https://image.flaticon.com/icons/png/128/1384/1384031.png" style={{width: '20px', height: '24px'}} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
