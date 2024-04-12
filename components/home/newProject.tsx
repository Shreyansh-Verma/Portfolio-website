import Typewriter from 'typewriter-effect';
import React, {MutableRefObject, useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import Carousel from 'react-bootstrap/Carousel';
import Slider from '@/components/home/slider';
import { useMediaQuery } from 'react-responsive'


const cardContentArr = [
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
]

function NewProject() {

  const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? <>{children}</> : null;
  };
  
  const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? <>{children}</> : null;
  };
  
  const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? <>{children}</> : null;
  };
  
  const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? <>{children}</> : null;
  };

  return (
    <>
      <Desktop>
        <div id = "projectSection" style = {{marginLeft:"3.2%",display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative", justifyContent:"space-around"}}>
          <div style = {{display:"flex", flexDirection:"column" ,height:"15vh", minWidth:"100vw"}} id="headingSection">
            <div style = {{fontFamily:"Gotham"}}>
              <p className = "seq text-2xl" style={{marginLeft:"3.2%"}}>Projects</p>
            </div>
            <div style = {{display:"flex", alignItems:"center", marginTop:"2%"}}>
              <p className = "seq text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>My Works</p>
            </div>
            <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column", marginTop:"1%"}}>
              <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
              <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>service design, system design and retail design.</p>
            </div>
          </div>
          <Slider height='500px' width = '550px'/>
        </div>
      </Desktop>
      <Tablet>
        <div id = "projectSection" style = {{marginLeft:"3.2%",display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative", justifyContent:"space-around"}}>
            <div style = {{display:"flex", flexDirection:"column" ,height:"15vh", minWidth:"100vw"}} id="headingSection">
              <div style = {{fontFamily:"Gotham"}}>
                <p className = "seq text-2xl" style={{marginLeft:"3.2%"}}>Projects</p>
              </div>
              <div style = {{display:"flex", alignItems:"center", marginTop:"2%"}}>
                <p className = "seq text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>My Works</p>
              </div>
              <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column", marginTop:"1%"}}>
                <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
                <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>service design, system design and retail design.</p>
              </div>
            </div>
            <Slider height='500px' width = '550px'/>
        </div>
      </Tablet>
      <Mobile>
        <div id = "projectSection" style = {{marginLeft:"3.2%",display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative", justifyContent:"space-around"}}>
            <div style = {{display:"flex", flexDirection:"column" ,height:"15vh", minWidth:"100vw"}} id="headingSection">
              <div style = {{fontFamily:"Gotham", alignSelf:"center"}}>
                <p className = "seq text-3xl" style={{}}>Projects</p>
              </div>
              <div style = {{display:"flex", alignItems:"center", marginTop:"2%", alignSelf:"center"}}>
                <p className = "seq text-4xl" style = {{fontFamily:"Helios Pro"}}>My Works</p>
              </div>
              <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column", marginTop:"2%", alignSelf:"center", textAlign:"center"}}>
                <p className = "text-2xl" style = {{}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
                <p className = "text-2xl" style = {{}}>service design, system design and retail design.</p>
              </div>
            </div>
            <div style = {{height:"40vh"}}>         
              < Slider height = "400px" width = "450px" />
            </div>

        </div>
      </Mobile>

    </>
  );
}

export default NewProject;
