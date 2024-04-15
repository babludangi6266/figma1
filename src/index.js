import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GrowthSchool from './component/Growth';
import Page2 from './component/page2';
import Page3 from './component/Page3';
import Banner from './component/Banner';
import Page5 from './component/Page5';
import Page7 from './component/Page7';
import Page8 from './component/Page8'; 
import Navbar from './component/Navbar';
import Footer from './component/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <GrowthSchool/>
    <Page2/>
    <Page3/>
   <Banner/>
   <Page5/>
   <Page7/>
   <Page8/>
   <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
