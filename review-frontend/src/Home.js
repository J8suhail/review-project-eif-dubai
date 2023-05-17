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
        <ListSec1 imageName={section1Image1} MName="Guardians of the Galaxy Vol. 3" Mdescription="Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful." />
        <ListSec1 imageName={section1Image1} MName="Guardians of the Galaxy Vol. 3" Mdescription="Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful." />
        {/* <Section1 imageName={section1Image1} MName="" Mdescription="" Mduration="" Mtype="" Director="" writer="" stars=""/> */}
       

       
        <Footer/>
        </>
  );
}

export default Home;