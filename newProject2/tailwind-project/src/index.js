import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FriendWork from './Companents/FriendWork';
import ServicesSecond from './Companents/ServicesSecond';
import ServicesFirst from './Companents/ServicesFirst';
import OurProcess from './Companents/OurProcess';
import Header from './Companents/Header';
import Article from './Companents/Article';
import FooterFirst from './Companents/FooterFirst';
import FoooterSecond from './Companents/FoooterSecond';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <FriendWork/>
    <ServicesFirst />
    <ServicesSecond />
    <OurProcess/>
    <Article/>
    <FooterFirst/>
    <FoooterSecond/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
