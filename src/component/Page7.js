import React from "react";
import './Page7.css';
import img1 from './images/Page7a.jpg';
import img2 from './images/page7b.jpg';
import img3 from './images/page7c.jpg';
import img4 from './images/page7d.jpg';

function Page7() {
  return (
    <>
      <div className="mainClass">
        <div>
          <img src={img1} alt="Image 1" /><br></br>
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        <div>
          <img src={img3} alt="Image 3" />
        </div>
        <div>
          <img src={img4} alt="Image 4" />
        </div>
        </div>
    </>
  );
}
export default Page7;
