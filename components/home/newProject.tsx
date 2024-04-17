import Typewriter from 'typewriter-effect';
import React, {MutableRefObject, useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import Carousel from 'react-bootstrap/Carousel';
import Slider from '@/components/home/slider';
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router';


const cardContentArr = [
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
]

function NewProject() {

  const router = useRouter();

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

  const handleButtonClick = () => {
    router.push('/works'); // Replace '/abc' with the route you want to navigate to
  };


  return (
    <>
      <Desktop>
        <div id = "projectSection" style = {{display:"flex", flexDirection:"column", position:"relative", justifyContent:"space-around"}}>
            <div style = {{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"35vh"}}>
              <div style = {{display:"flex", flexDirection:"column", height:"30vh" ,width:"95vw", justifyContent:"space-between"}} id="headingSection">
                <div style = {{fontFamily:"Gotham"}}>
                  <p className = "seq text-2xl" style={{}}>Projects</p>
                </div>
                <div style = {{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <p className = "seq text-6xl" style = {{fontFamily:"Helios Pro"}}>My Works</p>
                  <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                        Show All
                      </button>
                </div>
                <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column"}}>
                  <p className = "text-2xl" style = {{}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
                  <p className = "text-2xl" style = {{}}>service design, system design and retail design.</p>
                </div>
              </div>
          </div>
          <Slider height='450px' width = '500px'/>
        </div>
      </Desktop>
      <Tablet>
        <div id = "projectSection" style = {{display:"flex", flexDirection:"column", position:"relative", justifyContent:"space-around"}}>
          <div style = {{display:"flex", justifyContent:"center", alignItems:"center", height:"30vh"}}>
            <div style = {{display:"flex", flexDirection:"column", minHeight:"25vh" ,width:"95vw", justifyContent:"space-between"}} id="headingSection">
              <div style = {{fontFamily:"Gotham"}}>
                <p className = "seq text-2xl" style={{}}>Projects</p>
              </div>
              <div style = {{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <p className = "seq text-6xl" style = {{fontFamily:"Helios Pro"}}>My Works</p>
                <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                      Show All
                    </button>
              </div>
              <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column"}}>
                <p className = "text-2xl" style = {{}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
                <p className = "text-2xl" style = {{}}>service design, system design and retail design.</p>
              </div>
            </div>
          </div>
            <Slider height='450px' width = '500px'/>
        </div>
      </Tablet>
      <Mobile>
        <div id = "projectSection" style = {{display:"flex", flexDirection:"column", position:"relative", justifyContent:"space-around"}}>
            <div style = {{display:"flex", justifyContent:"center", alignItems:"center", height:"30vh"}}>
              <div style = {{display:"flex", flexDirection:"column", minHeight:"25vh" ,width:"95vw", justifyContent:"space-between"}} id="headingSection">
                <div style = {{fontFamily:"Gotham"}}>
                  <p className = "seq text-2xl" style={{}}>Projects</p>
                </div>
                <div style = {{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <p className = "seq text-3xl" style = {{fontFamily:"Helios Pro"}}>My Works</p>
                  <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                        Show All
                  </button>
                </div>
                <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column"}}>
                  <p className = "text-1xl" style = {{}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
                  <p className = "text-1xl" style = {{}}>service design, system design and retail design.</p>
                </div>
              </div>
            </div>
              <Slider height='400px' width = '450px'/>
          </div>
      </Mobile>

    </>
  );
}

export default NewProject;
