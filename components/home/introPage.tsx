// // Copyright Ayush Singh 2021,2022. All Rights Reserved.
// // Project: folio
// // Author contact: https://www.linkedin.com/in/alphaayush/
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
// import React, { MutableRefObject, useEffect, useRef } from "react";
// import Typed from "typed.js";
// import Image from "next/image";
import { gsap, Linear } from "gsap";

import { Navigate } from "react-router-dom";

import MediaQuery, { useMediaQuery } from 'react-responsive'

import { IDesktop } from "pages";


import React, { useEffect, useRef } from 'react';
// import './introPage.css';

const IntroSection = ({ isDesktop }: IDesktop) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tl = useRef();


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
  // const navigate = useNavigate();

  const handleClick = () => {
    // useNavigate("/about");
    // Navigate("/hero");
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (textRef.current && imageRef.current) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const textScrollAmount = scrollTop * 0.5; // Adjust the speed of text scroll
      const imageScrollAmount = scrollTop * 0.3; // Adjust the speed of image scroll
      textRef.current.style.transform = `translateY(${textScrollAmount}px)`;
      imageRef.current.style.transform = `translateY(${imageScrollAmount}px)`;
    }
  };

  useEffect(() => {
    if (isDesktop)
    {
    		gsap.from('#imgWrapper', {
			scrollTrigger: {
				trigger: '#div2',
				start: 'top 60%',
        end: 'top 20%',
        // markers:true,
				scrub: 1.9
			},
			yPercent: 60,
      xPercent: -20,
      scale: 1.5
		})

    gsap.from('#headingContent', {
			scrollTrigger: {
				trigger: '#div2',
				start: 'top 60%',
        end: 'top 20%',
        // markers:true,
				scrub: 1.9
			},
			xPercent: 60,
      scale: 0.5
      // scale: 1.5
		})

    gsap.from('#contentContent', {
			scrollTrigger: {
				trigger: '#div2',
				start: 'top 60%',
        end: 'top 20%',
        // markers:true,
				scrub: 1.9
			},
			yPercent: 60,
      // scale: 1.5
		})
  }
		// gsap.from('#realImage2', {
		// 	scrollTrigger: {
		// 		trigger: '#div2',
		// 		start: 'top bottom',
		// 		scrub: 1.9
		// 	},
		// 	scale: 1.2
		// })
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

const HERO_STYLES = {
    SECTION:
      "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
    CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
    SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
    BG_WRAPPER:
      "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
    TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
  };

  const RESUME_LINK = `https://drive.google.com/file/d/1jp1Be0Rhvy0I_G0Cc7KF7g_GyKYlfQyL/view?usp=sharing`;


  return (
    <>
    <Desktop>
      <div id="div2" style={{display:"flex", justifyContent:"space-between", minHeight: "100vh"}}>
        <div id="imgWrapper" style  = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", position:"relative",minWidth:"50%", minHeight: "100vh"}}>
          <div style = {{display:"flex",height:"10vh", minWidth:"40vw", zIndex:"5", alignItems:"center", justifyContent:"center"}}>
            <div style = {{display:"flex",alignItems:"center",justifyContent:"flex-end", width:"100%"}}>
              <button onClick = {() => window.location.href = RESUME_LINK} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-900 hover:border-transparent rounded">
                    Resume
              </button>
            </div>
          </div>
          <div style = {{zIndex:"2",minHeight:"20vh", border:"1px solid white", borderRadius:"3%", minWidth:"40vw", backgroundColor:"rgba(0,0,0,0.75)"}}>
            <div style ={{display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", padding:"2%", fontFamily:"Gotham", height:"100%"}}>
              <div>Currently purusing M.Des in</div>
              <div><span style = {{fontFamily:"Helios Pro"}}>&apos;Design for Retail Experience&apos;</span> at</div>
              <div>National Institute of Design, Bengaluru</div>
            </div>
          </div>
          <img id="realImage2" style={{ position:"absolute", height:"100%", width:"100%"}} src="/introImg.png" alt="Intro" />
        </div>
        <div style = {{display:"flex",height:"100vh", width:"50vw", justifyContent:"flex-start"}}>
        <div style = {{width:"47.5vw"}}>
          <div id = "aboutInfo" style = {{ backgroundColor:"black",height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-between", border:"3px solid #d9d9d9", borderRadius:"1%", backgroundImage: `url(/aboutSection.png)` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            <div id="headingContent" style = {{minHeight:"20%",display:"flex",justifyContent: "Center", alignItems: "Center" }}>
              <h1 className = "text-6xl" style = {{fontFamily:"Helios Pro", color: "#fff"}}>
                  About
              </h1>
            </div>
            <div id="contentContent" style = {{display:"flex", minHeight:"60%", justifyContent:"center", fontFamily:"Helios Pro"}}>
              <p className="text-2xl" style={{margin:"15%", fontFamily:"Gotham"}}>A dynamic experience designer with a versatile skill set. I thrive on articulating the &quot;PURPOSE&quot; and the &quot;RIGHT METHOD&quot; behind every design, seeking to create impactful experiences that resonate with users on a deeper level.</p>
            </div>
            <div style = {{display:"flex", justifyContent:"flex-end",fontFamily:"Gotham"}}>  
              <div style = {{}}>
              <button onClick = {handleClick} className="bg-black hover:bg-transparent-100 text-white-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Know More
              </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Desktop>
    <Tablet>
    <div id="div2" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight: "100vh"}}>
        <div id="imgWrapper" style  = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", position:"relative",minWidth:"50%", minHeight: "60vh"}}>
          <div style = {{display:"flex",height:"10vh", minWidth:"80vw", zIndex:"5", alignItems:"center", justifyContent:"center"}}>
              <div style = {{display:"flex",alignItems:"center",justifyContent:"flex-end", width:"100%"}}>
                <button onClick = {() => window.location.href = RESUME_LINK} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-900 hover:border-transparent rounded">
                      Resume
                </button>
              </div>
            </div>
          <div style = {{zIndex:"2",minHeight:"10vh", border:"1px solid white", borderRadius:"3%", minWidth:"80vw", backgroundColor:"rgba(0,0,0,0.75)"}}>
            <div style ={{display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", padding:"2%", fontFamily:"Gotham", height:"100%"}}>
              <div>Currently purusing M.Des in</div>
              <div><span style = {{fontFamily:"Helios Pro"}}>&apos;Design for Retail Experience&apos;</span> at</div>
              <div>National Institute of Design, Bengaluru</div>
            </div>
          </div>
          <img id="realImage2" style={{ position:"absolute", height:"100%", width:"100%"}} src="/introImg.png" alt="Intro" />
        </div>
        <div style = {{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
          <div id = "aboutInfo" style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"95vw", border:"3px solid #d9d9d9", borderRadius:"1%", backgroundImage: `url(/aboutSection.png)`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",height:"50vh" }}>
            <div id="headingContent" style = {{minHeight:"20%",display:"flex",justifyContent: "Center", alignItems: "Center" }}>
              <h1 className = "text-6xl" style = {{fontFamily:"Helios Pro", color: "#fff"}}>
                  About
              </h1>
            </div>
            <div id="contentContent" style = {{display:"flex", minHeight:"60%", justifyContent:"center", fontFamily:"Helios Pro"}}> 
              <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"80%"}}>
                <p className="text-2xl" style={{fontFamily:"Gotham"}}>A dynamic experience designer with a versatile skill set. I thrive on articulating the &quot;PURPOSE&quot; and the &quot;RIGHT METHOD&quot; behind every design, seeking to create impactful experiences that resonate with users on a deeper level.</p>
              </div>
            </div>
            <div style = {{display:"flex", justifyContent:"flex-end",fontFamily:"Gotham"}}>  
              <div style = {{}}>
              <button onClick = {handleClick} className="bg-black hover:bg-transparent-100 text-white-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Know More
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tablet>
    <Mobile>
    <div id="div2" style={{display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight: "100vh"}}>
        <div id="imgWrapper" style  = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", position:"relative",minWidth:"50%", minHeight: "60vh"}}>
            <div style = {{display:"flex",height:"10vh", minWidth:"80vw", zIndex:"5", alignItems:"center", justifyContent:"center"}}>
              <div style = {{display:"flex",alignItems:"center",justifyContent:"flex-end", width:"100%"}}>
                <button onClick = {() => window.location.href = RESUME_LINK} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-900 hover:border-transparent rounded">
                      Resume
                </button>
              </div>
          </div>
          <div style = {{zIndex:"2",minHeight:"10vh", border:"1px solid white", borderRadius:"3%", minWidth:"80vw", backgroundColor:"rgba(0,0,0,0.75)"}}>
            <div style ={{display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", padding:"2%", fontFamily:"Gotham", height:"100%"}}>
              <div>Currently purusing M.Des in</div>
              <div><span style = {{fontFamily:"Helios Pro"}}>&apos;Design for Retail Experience&apos;</span> at</div>
              <div>National Institute of Design, Bengaluru</div>
            </div>
          </div>
          <img id="realImage2" style={{ position:"absolute", height:"100%", width:"100%"}} src="/introImg.png" alt="Intro" />
        </div>
        <div style = {{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
          <div id = "aboutInfo" style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"95vw", border:"3px solid #d9d9d9", borderRadius:"1%", backgroundImage: `url(/aboutSection.png)`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",height:"50vh" }}>
            <div id="headingContent" style = {{minHeight:"20%",display:"flex",justifyContent: "Center", alignItems: "Center" }}>
              <h1 className = "text-4xl" style = {{fontFamily:"Helios Pro", color: "#fff"}}>
                  About
              </h1>
            </div>
            <div id="contentContent" style = {{display:"flex", minHeight:"60%", justifyContent:"center", fontFamily:"Helios Pro"}}> 
              <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"80%"}}>
                <p className="text-1xl" style={{fontFamily:"Gotham"}}>A dynamic experience designer with a versatile skill set. I thrive on articulating the &quot;PURPOSE&quot; and the &quot;RIGHT METHOD&quot; behind every design, seeking to create impactful experiences that resonate with users on a deeper level.</p>
              </div>
            </div>
            <div style = {{display:"flex", justifyContent:"flex-end",fontFamily:"Gotham"}}>  
              <div style = {{}}>
              <button onClick = {handleClick} className="bg-black hover:bg-transparent-100 text-white-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Know More
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mobile>
    </>
  );
};

export default IntroSection;

