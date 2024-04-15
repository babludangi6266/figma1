import React from 'react';
import './Footer.css';
import fb from './images/fb.png';
import insta from './images/insta.jpeg';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import footerLogo from './images/footerLogo.png';

function Footer(){
    return(
<>
<div className='first-footer-div'>
    <div className='footerMainDiv'>
        <div className='foooterRightDiv'>
           <div className='footer-right-main'>
             <h2 className='Best-kept'>Best Kept Secrets</h2>
           </div>
           <div className='Be-first-div'>
            <p>Be the first to find out about the newest <br/>programs, workshops, and community <br/>activities - plus industry news, articles, and <br/>special reports. All delivered to your inbox!</p>
           </div>
           <div className='buttondiv'>
            <div>
            <a href="#" className="btn1">
                <input placeholder='Enter Your Email'></input>
              </a>
            </div>
            <div>
            <a href="#" className="btn2">
                Subscribe 
              </a>
            </div>
           </div>
           <div>
           <ul className="social-icons">
      <li>
        <a href="https://twitter.com/growthschoolio" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/growthschoolio" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/growthschoolio/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/school/growthschoolio/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </li>
    </ul>
    </div>
    <div className='footer-logo-div'>
      <img src={footerLogo}></img>
    </div>
   </div>
        <div className='footerLeftDiv'> 
            <div className='industries-div'>
            <h3>Industries</h3>
            <a href='#'>Generative AI</a><br/><br/>
            <a href='#'>Product</a><br/><br/>
            <a href='#'>Design</a><br/><br/>
            <a href='#'>Business</a><br/><br/>
            <a href='#'>Tech and Data</a><br/><br/>
            </div>

            <div className='roles-div'>
            <h3>Roles</h3>
            <a href='#'>Personal Growth</a><br/><br/>
           <a href='#'>Founders</a><br/><br/>
            </div>
            <div className='engage-div'>
            <h3>Engage</h3>
            <a href='#'>Upskill your Team</a><br/><br/>
            <a href='#'>Learner's Center</a><br/><br/>
            <a href='#'>Newsletter Vault</a><br/><br/>
            <a href='#'>Apply as Mentor</a><br/><br/>
            </div>
            <div className='company-div'>
            <h3>Company</h3>
            <a href="#">About Us</a><br/><br/>
            <a href="#">Contact US</a> <br/> <br/>  
            <a href="#">Careers</a><br/>    <br/>
            <a href="#">Refund Policy</a><br/><br/>
            <a href="#">Terms and Condition</a><br/>  <br/>  
            <a href="#">Privacy Policy</a><br/><br/>    
            </div>
</div>
  </div>
  <div className="copyright">
                     <p style={{color:'white'}}>
                       ©2024 Sisinty Pvt. Ltd. All rights reserved
                     </p>
  </div>
  </div>
</>
    )
};
export default Footer;
