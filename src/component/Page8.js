import React from "react";
import './Page8.css';
import seq1 from './images/Page8a.jpg';
import seq2 from './images/Page8b.jpg';
import img1 from './images/Hackerank.jpg';
import img2 from './images/google.jpg';
import img3 from './images/Dunzo.jpg';
import img4 from './images/amazon.jpg';
import img5 from './images/podcast.jpg';
import l1 from './images/last1.jpg';
import l2 from './images/last2.jpg';
import l3 from './images/last3.jpg';
import l4 from './images/last4.jpg';
import l5 from './images/last5.jpg';


function Page8(){
    return(
<>
<div className="backed">
    <h2>Backed by the best</h2>
</div>
<div className="grth"><h3 className="Growth1">GrowthSchool is backed and supported by 80+ Angel Investors</h3></div>

<div>
<div className="logos">
        <img src={seq1} alt="Sequoia Capital" />
        <img src={seq2} alt="Ventures" />
</div>
  <div>
 <div className="footerImage">
  <img src={img2} alt="Google Logo" />
  <img src={img1} alt="Uber Logo" />
  <img src={img3} alt="Woz Logo" />
  <img src={img4} alt="Google Logo" />
  <img src={img5} alt="Google Logo" />
  </div>
</div>
<div>
    <h1 className="h11"><b>Featured</b></h1>
    <div className="footerImage2">
  <img src={l1} alt="Google Logo" />
  <img src={l2} alt="Uber Logo" />
  <img src={l3} alt="Woz Logo" />
  <img src={l4} alt="Google Logo" />
  <img src={l5} alt="Google Logo" />
  </div>
</div>
</div>
</>
    );
}
export default Page8;