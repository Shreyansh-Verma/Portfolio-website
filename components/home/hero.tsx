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

import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

import React, { useEffect, useRef } from 'react';
// import './introPage.css';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tl = useRef();

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


  // useEffect(() => {
  //   const animation = motion.animate(
  //     ".box",
    
  //   );


  // }, []);

  useEffect(() => {



    // const tl = gsap.timeline({ 
    //   defaults: { ease: 'none' }, 
    //   scrollTrigger:{
    //     trigger: ".intro-image img",
    //     // pin: true,
    //     scrub: true,
    //     start: "top 40%",
    //     end: "top top",
    //     markers:true,
    //     // onEnter: function() {
    //     //   tl.reverse()
    //     // }
    //     onToggle: (self) => console.log("toggled, isActive:", self.isActive),

    //   }
    // },);

    // tl
    //   .to(".intro-image img", { opacity: 1, scale:2.25, duration: 50000, x: "0vh"}, 3)
    //   // .to("#introText", {x:"50Vh", zIndex: -20, duration : 100});

    gsap.to('#introText', {
			scrollTrigger: {
				trigger: '#div1',
				start: 'top 5%',
        markers: true,
				scrub: 3,
			},
			xPercent: 100,
      // opacity: 0.5
      
		});

    gsap.to('#realImage  ', {
			scrollTrigger: {
				trigger: '#div1',
				start: 'top top',
				scrub: 1.9
			},
			x: "-80vw",
      y: "-20vw",
      width: "100vw",
      scale: 0.8
      // rotateY: "180"
		})

    // gsap.to('#new_span', {
		// 	scrollTrigger: {
		// 		trigger: '#div1',
		// 		start: 'top top',
    //     markers: true,
		// 		scrub: 1.9
		// 	},
		// 	xPercent: 50
		// });

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

  

  return (
    <div id = "wrapper" style = {{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
      <div id="div1" style={{flex:"0.1",display:"flex", minHeight: "100vh", backgroundImage:`url(/backgroundImg.gif)`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div style = {{width:"60vw", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <div style = {{ zIndex:"2",display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center",flex:"1.25",alignSelf:"flex-start"}} id = "upperText">
            <div id = "helloTxt" style = {{ width:"80%"}} className="text-2xl">hello!</div> 
            <div id = "TVtext" className="text-5xl font-bold" style={{width:"80%", fontFamily:"Helios Pro", fontWeight:"400", color:"white"}}>I am TANISHA VERMA</div>
            <div id = "dynamicText" className="text-base font-light" style={{width:"80%", fontFamily:"Gotham"}}  >
            <Typewriter
                  options={{
                    // autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                        .typeString("I design")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Dynamic User Experiences")
                        .start();
                }}
            />

            </div>
          </div>

          <div style = {{flex:"0.65", fontFamily:"Helios Pro", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }} id = "lowerText">
            <div id = "welcomeTxt" className = "text-2xl font-light" style = {{width:"80%"} }>
            Welcome to
            </div>
            <div id = "spaceTxt" className = "text-6xl font-bold" style = {{width:"80%"}}>
              my SPACE !
            </div>
          </div>     
      </div>
          <div style={{width:"40vw", height: "50vh", position: "relative", alignSelf:"flex-end" }} className="intro-image">
            <img id="realImage" style={{ height: "80%", width:"80%" }} src="/astronaut.svg" alt="Intro" />
          </div>
    </div>
    <div style = {{flex :"0.1"}} id = "stripe">
      <img src = "/stripe.jpeg"></img>
    </div>
  </div>

  );
};

export default HeroSection;

