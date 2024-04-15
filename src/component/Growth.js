import React from 'react';
import './page1.css';
import logoImage from './images/Logo1.png';
import canvaLogo from './images/Canva.png'; 
import cocaColaLogo from './images/CocoCola.png';
import paytmLogo from './images/paytem.png';
import Ogily from './images/Ogily.png';
import Oyo from './images/oyo.png';
import micro from './images/micro.png';
import adobe from './images/adobe.png';
import razor from './images/razorpay.png';
import mpl from './images/mpl.png';
import walmart from './images/walmart.png';
import nvd from './images/nvd.png';

const GrowthSchool = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GrowthSchool</title>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@100..900&display=swap')
        </style>
      </head>
      <body>
        <main>
          <section className="hero">
            <div className="container">
              <h1>Become the Top 1%</h1>
              <p>
                Whether it is Product, Growth, Design, Management,<br/> Business, Tech & Data GrowthSchool is the place<br/> to learn from top experts in the field.
              </p>
              <a href="#" className="btn">
                Explore Programs
              </a>
            </div>
          </section>
          <section className="f1">
              <h2>Trusted by Leading Companies</h2>
              <div className="f1-wrapper">
                <marquee>
                <img src={canvaLogo} />&nbsp;
               <img src={cocaColaLogo} />&nbsp;
               <img src={paytmLogo}/>&nbsp;
               <img src={Ogily}/>&nbsp;
               <img src={Oyo}/>&nbsp;
               <img src={micro}/>&nbsp;
               <img src={adobe}/>&nbsp;
               <img src={razor}/>&nbsp;
               <img src={walmart}/>&nbsp;
               <img src={mpl}/>&nbsp;
               <img src={nvd}/>&nbsp;
                </marquee>
               
              </div>
          </section>
        </main>
        <footer> </footer>
      </body>
    </html>
  );
};

export default GrowthSchool;
