import React from 'react';
import './Page5.css';
import google from './images/google.jpg';
import hackerrank from './images/Hackerank.jpg';
import smallcase from './images/smallcase.png';
import dunzo from './images/Dunzo.jpg';
import amazon from './images/amazon.jpg';
import sweggy from './images/sweggy.jpg';


function Banner() {
  return (
    <>
    <div className="banner">
      <div className="banner-text">
      <span>Learn from the practitioners</span>
<p>Develop real-world skills with our courses designed by industry practitioners.</p>
<div className="page5">
<marquee>
  <img src={google} alt="Google Logo" />
  <img src={hackerrank} alt="Uber Logo" />
  <img src={smallcase} alt="Woz Logo" />
  <img src={amazon} alt="Google Logo" />
  <img src={dunzo} alt="Backarrank Logo" />
  <img src={sweggy} alt="Sunzo Logo" />
</marquee>
</div>
<p>Why GrowthSchool?</p>
<div className="reasons">
  <span>Focus on real-world applications</span>
  <span>Learning through action</span>
  <span>Community at the center</span>
</div>
<button>Start your journey</button>

      
      </div>
    </div>
    
</>
  );
}

export default Banner;
