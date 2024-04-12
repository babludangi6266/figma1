import React from "react";
import Img1 from "./images/Link.png";
import Img2 from "./images/Link2.png";
import Img3 from "./images/Link3.png";
import Img4 from "./images/Link4.png";
import Img5 from "./images/Link1.png";
import Img6 from "./images/Link6.jpg";
import "./Page3.css"; // Assuming your CSS file is named Page3.css

function Page3() {
  return (  
    <>
    <p>      <h1>Explore the Programs</h1>
      <div className="detailsCard">
        <img src={Img1} alt="Program 1" />
        <img src={Img2} alt="Program 2" />
        <img src={Img3} alt="Program 3" />
        <img src={Img4} alt="Program 4" />
        <img src={Img5} alt="Program 5" />
        <img src={Img6} alt="Program 6" />
      </div>
      </p>

    </>
  );
}

export default Page3;
