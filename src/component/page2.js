import React from "react";
import "./page2.css";
import linkedIn from './images/Page2/linkedIn.jpg';
import google from './images/Page2/google.jpg';
import trustpilot from './images/Page2/trustpilot.jpg';
import csat from './images/Page2/csat.jpg';
import learner from './images/Page2/learners.jpg';
import programs from './images/Page2/programs.jpg';

function Page2() {
  return (
    <>
    <div className="container12">
    <div className="div11">
      <div>
      <img src={linkedIn} alt="LinkedIn" className="divim1" />
      </div>
      <div>
      <img src={google} alt="Google Review" className="divim2" />
    </div>
    <div>
    <img src={trustpilot} alt="TrustPilot" className="divim3"/>
    </div>
    </div><br/>
    <div className="div22">
      <div>
        <img src={learner} alt="learner" className="im1"/>
      </div>
      <div>
      <img src={programs} alt="programs" className="im2"/>
      </div>
      <div>
      <img src={csat} alt="SCAT" className="im3"/>
      </div>
    </div>
    </div>
    </>
  );
}

export default Page2;
