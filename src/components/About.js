import React from 'react';
import '../Style/About.css';

export default function About(props) {
  return (
    <>
      <h1 className="about-title">Advanced Statistics</h1>
      <p className="about-text">
        Track how your links are performing across the web with our advanced
        statistics dashboard{' '}
      </p>


      <div className="about-card-group">
         <div className="about-card">
          <div className="c-body" >
            <img  style={{height:'40px',width:'40px'}} src="../stat.svg"/>
          </div>
          <h3 className="about-card-title">Brand Recognition</h3>
          <p className="about-card-text">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
          </div>

        <div className="about-card ">
          <div className="c-body" >
            <img  style={{height:'40px',width:'40px'}} src="../flower.svg"/>
          </div>
          <h3 className="about-card-title">Detailed Records</h3>
          <p className="about-card-text">Gain insights into who is clicking your links. Knowing when and where people engage with you content helps inform better decisions.</p>
          </div>

        <div className="about-card ">
          <div className="c-body" >
            <img  style={{height:'40px',width:'40px'}} src="../pen.svg"/>
          </div>
          <h3 className="about-card-title">Fully Customizable</h3>
          <p className="about-card-text">Improve brand awareness and content discoverable link, supercharging audience engagement</p>
        </div>
        </div>
    </>
  );
}
