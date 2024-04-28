// // Copyright Ayush Singh 2021,2022. All Rights Reserved.
// // Project: folio
// // Author contact: https://www.linkedin.com/in/alphaayush/
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
// import React, { MutableRefObject, useEffect, useRef } from "react";
// import Typed from "typed.js";
// import Image from "next/image";
import { IDesktop } from "pages";

import MediaQuery, { useMediaQuery } from 'react-responsive'

import { gsap, Linear } from "gsap";

import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

import Image from 'next/image'

import React, { MutableRefObject, useEffect, useRef } from 'react';
// import './introPage.css';

const HeroSection = ({ isDesktop }: IDesktop) => {


  // let mn = gsap.matchMedia({minH\});
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tl = useRef();
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);


  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


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

  let xPercent = 0;


  useEffect( () => {

    gsap.set(secondText.current, {xPercent: -102})
  
    requestAnimationFrame(animate);
  
  }, [])
  
  let xPercentOne = 0;

  let xPercentTwo = -102;
  
  const animate = () => {

  
    if(xPercent > 102){
  
      // xPercent = -10;
      xPercent  = 0;
      if (xPercentOne>102)
        {
          xPercentOne = -102;
        }
        else
        {
          xPercentTwo = -102;
        }  
    }
  
    gsap.set(firstText.current, {xPercent: xPercentOne})  
    gsap.set(secondText.current, {xPercent: xPercentTwo})

    requestAnimationFrame(animate);
  
    xPercent += 0.1;
    xPercentOne += 0.1;
    xPercentTwo += 0.1
  
  }

  useEffect(() => {
    function handleResize() {
      // Update the state or perform any other actions when the
      // browser is resized
      // window.location.reload(); 

    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);
    // window.location.reload();

    // Remove the event listener when the component unmounts
  
  }, []);

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
        // markers: true,
				scrub: 3,
			},
			xPercent: 100,
      // opacity: 0.5
      
		});

    let mn = gsap.matchMedia();

    mn.add("(min-width: 992px)", () => {
      gsap.to('#realImage  ', {
        scrollTrigger: {
          trigger: '#div1',
          start: 'top top',
          // markers:true,
          scrub: 1.9,
          invalidateOnRefresh: true,
        },
        x: "-40vw",
        y: "-120vh",
        rotate:"-35",
        // width: "100vw",
        // scale: 8
        // rotateY: "180"
      })
    })

    mn.add("((min-width: 768px) and (max-width: 991px))", () => {
      gsap.to('#realImage  ', {
        scrollTrigger: {
          trigger: '#div1',
          start: 'top top',
          // markers:true,
          scrub: 1.9,
          invalidateOnRefresh: true,
        },
        x: "-40vw",
        y: "-100vh",
        rotate: "-25",
        // width: "100vw",
        // scale: 8
        // rotateY: "180"
      })
    })


    gsap.to('#realImage  ', {
			scrollTrigger: {
				trigger: '#div1',
				start: 'top top',
        // markers:true,
				scrub: 1.9,
        invalidateOnRefresh: true,
			},
			x: "-40vw",
      y: "-120vh",
      // width: "100vw",
      // scale: 8
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

    const handleMediaQueryChange = (matches: boolean) => {
      window.location.reload(); 
    }
  
    return (
      <>
        <Desktop>
          <div ref = {targetSection} id = "wrapper" style = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"95vh"}}>
            <div id="div1" style={{position:"relative",flex:"0.1", minHeight: "95vh",width:"95vw"}}>
              <div style = {{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <div style = {{ zIndex:"2",display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"flex-start",flex:"1.25",alignSelf:"flex-start"}} id = "upperText">
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
                              .typeString("I Design Dynamic User Experiences")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("I Create Visual design that effectively communicate")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Research is at the core of my design process")
                              .start();
                      }}
                  />
                  </div>
                </div>

                <div style = {{flex:"0.65", fontFamily:"Helios Pro", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start" }} id = "lowerText">
                  <div id = "welcomeTxt" className = "text-2xl font-light" style = {{width:"80%"} }>
                  Welcome to
                  </div>
                  <div id = "spaceTxt" className = "text-6xl font-bold" style = {{width:"80%"}}>
                    my SPACE !
                  </div>
                </div>     
              </div>
              <div id = "realImage" style={{position:"absolute", left:"45%", top:"8%", scale:"0.8"}}>
                <Image
                  src ="/rocket.svg"
                  width={800}
                  height={800}  
                  alt="Picture of the author"
                />
              </div>
                {/* <img id="realImage" style={{position:"absolute", left:"45%", top:"8%", scale:"0.8"}} src="/rocket.svg" alt="Intro" /> */}
          </div>
          <div style = {{fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"5vh" }} id = "stripe">
            <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            </span>
            <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            </span>
          </div>
        </div>
      </Desktop>
      <Tablet>
      <div ref = {targetSection} id = "wrapper" style = {{display:"flex", flexDirection:"column", minHeight:"95vh", justifyContent:"center", alignItems:"center"}}>
            <div id="div1" style={{position:"relative",flex:"0.1", minHeight: "95vh" }}>
              <div style = {{  height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"95vw"}}>
                  <div style = {{ zIndex:"2",display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"flex-start",flex:"1.25",alignSelf:"flex-start"}} id = "upperText">
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
                            .typeString("I Design Dynamic User Experiences")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I Create Visual design that effectively communicate")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Research is at the core of my design process")
                            .start();
                        }}
                    />
                    </div>
                  </div>

                  <div style = {{flex:"0.65", fontFamily:"Helios Pro", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", width:"95vw"}} id = "lowerText">
                    <div id = "welcomeTxt" className = "text-2xl font-light" style = {{width:"80%"} }>
                    Welcome to
                    </div>
                    <div id = "spaceTxt" className = "text-6xl font-bold" style = {{width:"80%"}}>
                      my SPACE !
                    </div>
                  </div>   
              </div>
              <div id = "realImage" style={{position:"absolute", left:"50%", top:"40%"}}>
              <Image
                  src ="/rocket.svg"
                  width={800}
                  height={800}  
                  alt="Picture of the author"
                />
              </div>
                {/* <img id="realImage" style={{position:"absolute", left:"30%", top:"20%", scale:"0.6"}} src="/rocket.svg" alt="Intro" /> */}
          </div>
          <div style = {{fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"5vh" }} id = "stripe">
            <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
            </span>
            <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p ref={null}>Service Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Visual Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{height:"1.8vh"}}src = "/star.svg"></img></p>
            </span>
          </div>
        </div>              
      </Tablet>
      <Mobile>
      <div ref = {targetSection} id = "wrapper" style = {{display:"flex", flexDirection:"column", minHeight:"95vh", justifyContent:"center", alignItems:"center"}}>
            <div id="div1" style={{position:"relative",flex:"0.1", minHeight: "95vh"}}>
              <div style = {{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",width:"95vw"}}>
                <div style = {{zIndex:"2",display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center",alignSelf:"flex-start"}} id = "upperText">
                  <div id = "helloTxt" style = {{ width:"80%"}} className="text-2xl">hello!</div> 
                  <div id = "TVtext" className="text-3xl font-bold" style={{width:"80%", fontFamily:"Helios Pro", fontWeight:"400", color:"white"}}>I am TANISHA VERMA</div>
                  <div id = "dynamicText" className="text-base font-light" style={{width:"80%", fontFamily:"Gotham"}}  >
                  <Typewriter
                        options={{
                          // autoStart: true,
                          loop: true,
                        }}
                        onInit={(typewriter) => {
                          typewriter
                          .typeString("I Design Dynamic User Experiences")
                          .pauseFor(200)
                          .deleteAll()
                          .typeString("I Create Visual design that effectively communicate")
                          .pauseFor(200)
                          .deleteAll()
                          .typeString("Research is at the core of my design process")
                          .start();
                      }}
                  />
                  </div>
                </div>
                <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <div id = "realImage" style={{height:"50vh"}}>
                    <Image
                    src ="/rocket.svg"
                    width={800}
                    height={800}  
                    alt="Picture of the author"
                    />

                  </div>
                  {/* <img id="realImage"  src="/rocket.svg" alt="Intro" /> */}
                </div>

                <div style = {{ fontFamily:"Helios Pro", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }} id = "lowerText">
                  <div id = "welcomeTxt" className = "text-2xl font-light" style = {{width:"80%"} }>
                  Welcome to
                  </div>
                  <div id = "spaceTxt" className = "text-5xl font-bold" style = {{width:"80%"}}>
                    my SPACE !
                  </div>
                </div>     
              </div>
          </div>
          {/* <div style = {{fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"5vh" }} id = "stripe">
            <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            </span>
            <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Visual Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            </span>
          </div> */}
        </div>
      </Mobile>
   
    </>
    );
};

export default HeroSection;

