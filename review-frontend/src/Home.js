import React from 'react';
import { Link } from "react-router-dom";
import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';
import section1Image1 from './images/image1.jpg';
import ListSec1 from './components/ListSec1';
import Section2 from './components/Section2';

function Home(){
    return(
        <>
        <Header/>
        <br/>
        <ListSec1/>
       

       
        <Footer/>
        </>
  );
}

export default Home;