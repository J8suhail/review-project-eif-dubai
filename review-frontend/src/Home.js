import React from 'react';
import { Link } from "react-router-dom";
import Header from './components/Header';
import './index.css';
import Footer from './components/Footer';
import section1Image1 from './images/image1.jpg';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function Home(){
    return(
        <>
        <Header/>
        <Section1 imageName={section1Image1} MName="Guardians of the Galaxy Vol. 3" Mdescription="Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful." Mduration="2h 30m" Mtype="Action/Comedy" Director="James Gunn" writer="James Gunn" stars="Chris Pratt- Chukwudi Iwuji- Bradley Cooper"/>
        {/* <Section1 imageName={section1Image1} MName="" Mdescription="" Mduration="" Mtype="" Director="" writer="" stars=""/> */}
       
        <div id="reviewpart"> 
   {/* <!--Testimonials-------------------> */}
   <section id="testimonials">
    {/* <!--heading---> */}
    <div class="testimonial-heading">
       
        <h2>Reviews:</h2>
    </div>
    {/* <!--testimonials-box-container------> */}
    <div class="testimonial-box-container">
 {/* <!--BOX-1--------------> */}
 {/* <Section3 Rname="HR" Rate1="" Rate2="" Rate3 ="" Rate4 ="" Rate5="" Rcomment="" /> */}
 <Section2 Rname="Asmaa" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
 {/* <!--BOX-2--------------> */}
 <Section2 Rname="Aisha" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />

 {/* <!--BOX-3--------------> */}
 <Section2 Rname="Ahmed" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />

 {/* <!--BOX-4--------------> */}
 <Section2 Rname="Ali" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
 </div>
</section>
</div>

       
        <Footer/>
        </>
  );
}

export default Home;