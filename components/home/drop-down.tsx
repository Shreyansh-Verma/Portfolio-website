import { gsap, Linear } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import React, { useState,useEffect, useRef } from "react";
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import { forwardRef , ReactNode} from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive'
import {motion} from "framer-motion"



const Card = ({cardImage, cardContent}:{cardImage:string,cardContent:string}) => {
  return (
      <div style={{
          display: "flex",
          minHeight: "30vh",
          minWidth: "15vw",
          borderRadius: "2%",
          backgroundImage: `url(${cardImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "transform 0.3s ease-in-out" // Added transition for smooth scaling
      }} 
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          <div style={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(0,0,0,0.75)",
              minHeight: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
          }}>
              <p>{cardContent}</p>
          </div>
      </div>
  );
};

const CardMobil = ({cardImage, cardContent}:{cardImage:string, cardContent:string}) => {
  return (
      <div style={{
          display: "flex",
          minHeight: "30vh",
          minWidth: "80vw",
          borderRadius: "2%",
          backgroundImage: `url(${cardImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "transform 0.3s ease-in-out" // Added transition for smooth scaling
      }} 
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          <div style={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(0,0,0,0.75)",
              minHeight: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
          }}>
              <p>{cardContent}</p>
          </div>
      </div>
  );
};



const CardsSpiral = () => {
  // Refs for left and right sections
  const leftCardsRefs = useRef(new Array (4));
  const rightCardsRefs = useRef(new Array (4));
  const midCardRef = useRef(null);
  const router = useRouter();
  const firstText = useRef(null);
  const secondText = useRef(null);

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  // Function to update screenWidth state when window resizes
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add event listener for window resize
  React.useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);


  const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDesktop = screenWidth >= 992;
    return isDesktop ? <>{children}</> : null;
  };

  const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isTablet = screenWidth >= 768 && screenWidth < 992;
    return isTablet ? <>{children}</> : null;
  };

  const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = screenWidth < 768;
    return isMobile ? <>{children}</> : null;
  };

  const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isNotMobile = screenWidth >= 768;
    return isNotMobile ? <>{children}</> : null;
  };

  const handleButtonClick = () => {
    router.push('/aboutMe'); // Replace '/abc' with the route you want to navigate to
  };


  let xPercent = 0;


  useEffect( () => {

    gsap.set(secondText.current, {xPercent: 102})
  
    requestAnimationFrame(animate);
  
  }, [])
  
  let xPercentOne = 0;

  let xPercentTwo = 102;
  
  const animate = () => {

  
    if(xPercent < -102){
  
      // xPercent = -10;
      xPercent  = 0;
      if (xPercentOne < -102)
        {
          xPercentOne = 102;
        }
        else
        {
          xPercentTwo = 102;
        }
      // xPercentOne = -100;
      // xPercentTwo = -100;
  
    }

    // console.log("x percent = ",xPercent);
  
    gsap.set(firstText.current, {xPercent: xPercentOne})
  
    gsap.set(secondText.current, {xPercent: xPercentTwo})
  
    requestAnimationFrame(animate);
  
    xPercent -= 0.1;
    xPercentOne -= 0.1;
    xPercentTwo -= 0.1
  
  }

  let mn = gsap.matchMedia();

  useEffect(()=>{

    mn.add("(min-width: 768px)",()=>{

        for(let i = 0;i<3;i++)
        {
          if(i%1)
          {
    
            gsap.fromTo(
            leftCardsRefs.current[i],
            { yPercent: 0 },
            {
              yPercent: -100,
              scrollTrigger: {
                trigger: leftCardsRefs.current[i],
                start: "top bottom-=200", // Adjust start position as needed
                end: "bottom top",
                scrub: true
              }
            }
          );
          }
          else
          {
              gsap.fromTo(
              leftCardsRefs.current[i],
              { yPercent: 0 },
              {
                yPercent: -100,
                scrollTrigger: {
                  trigger: leftCardsRefs.current[i],
                  start: "top bottom-=200", // Adjust start position as needed
                  end: "bottom top",
                  scrub: 3
                }
              }
            );
          }
        }
        
        for(let i = 0;i<3;i++)
        {
          if(i%1)
          {
          gsap.fromTo(
            rightCardsRefs.current[i],
            { yPercent: 0 },
            {
              yPercent: -100,
              scrollTrigger: {
                trigger: rightCardsRefs.current[i],
                start: "top bottom-=200", // Adjust start position as needed
                end: "bottom top",
                scrub: true
              }
            }
          );
          }
          else
          {
            gsap.fromTo(
          
              rightCardsRefs.current[i],
              { yPercent: 0 },
              {
                yPercent: -100,
                scrollTrigger: {
                  trigger: rightCardsRefs.current[i],
                  start: "top bottom-=200", // Adjust start position as needed
                  end: "bottom top",
                  scrub: 3
                }
              }
            );
          }
        }
    
        gsap.to(
          midCardRef.current,
          {
            // yPercent: -100,
            scrollTrigger: {
              trigger: midCardRef.current,
              start: "top top+=5%", // Adjust start position as needed
              end: "+=50%",
              pin: true,
              // scrub: 3
            }
          }
        );

        gsap.to('#ufo', {
          scrollTrigger: {
            trigger: '#scrollSection',
            start: 'top top',
            scrub: 1.9
          },
          x: "100vw",
          y: "120vh",
        })
  })

  },[])


  // useEffect(() => {
  //   gsap.to('#ufo', {
	// 		scrollTrigger: {
	// 			trigger: '#scrollSection',
	// 			start: 'top top',
	// 			scrub: 1.9
	// 		},
	// 		x: "100vw",
  //     y: "120vh",
	// 	})
  // },[])

  return (
    <>
    <Desktop>
      <div style={{ display: "flex", minHeight: "130vh" , flexDirection:"column", justifyContent:"center", alignItems:"center" }} id="scrollSection">
        <div style = {{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"95vw"}}>
          <div className = "text-4xl seq font-bold" style = {{position:"relative", fontFamily:"Gotham",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",height:"50vh", width:"100%"}}>
            <img id = "ufo" style={{left:"-10%",top:"-20%",position:"absolute", height:"60vh", width:"50vw"}} src = "/ufo.svg"></img>
            <div>
              My design ethos centers around <span style = {{color:"#ADE1FF"}}> user-centric </span> solutions
            </div>
            <div>
              and  <span style = {{color:"#ADE1FF"}}> cross disciplinary </span> collaboration.
            </div>
          </div>
          <div>     
          </div>
          <div style={{display:"flex"}}>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "30vw"}} id="leftSection">
              <div ref = {(el)=> leftCardsRefs.current[0] = el} style = {{alignSelf:"flex-start"}}>
                <Card cardImage  = "/p1.png" cardContent="Empathy"/>
              </div>
              <div ref = {(el)=> leftCardsRefs.current[1] = el} style  = {{alignSelf:"flex-end"}}>
                <Card cardImage  = "/p3.png" cardContent="Teamwork"/>
              </div>
              <div ref = {(el)=> leftCardsRefs.current[2] = el} style = {{alignSelf : "flex-start"}}>
                <Card cardImage  = "/p5.png" cardContent="Dedication"/>
              </div>
            </div>

            <div style={{display: "flex", minHeight: "100vh", width: "35vw"}} id="midSection">
              <div ref = {(el)=> midCardRef.current = el}  style = {{width:"100%", justifyItems:"center", alignSelf:"flex-start"}}>
                <div style = {{ display:"flex", flexDirection:"column", justifyContent:"space-between", borderRadius:"5%", alignItems:"center", minHeight:"70vh"}}>
                  <div className = "text-bold text-2xl" id="section-1" style = {{fontFamily:"Gotham", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                      <div>
                        I enjoy Turning 
                      </div>
                        Stories into Realities
                      <div>
                      </div>
                  </div>

                  <div id="section-2" className="text-bold text-6xl" style = {{fontFamily:"Helios Pro", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                    <div>
                      My
                    </div>
                    <div>
                      Playground
                    </div>
                  </div>

                  <div id="section-3" className = "text-bold text-2xl" style = {{fontFamily:"Gotham",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div>
                      I enjoy Turning
                    </div>

                    <div>
                      Stories into Realities
                    </div>
                  </div>
                  <div id="section-4" style = {{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <motion.div
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                    <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                      Know More
                    </button>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>

            <div style={{  display: "flex", flexDirection: "column", minHeight: "100vh", width: "30vw"}} id="rightSection">
            <div ref = {(el)=> rightCardsRefs.current[0] = el} style = {{alignSelf:"flex-end"}}>
                <Card cardImage  = "/p2.png" cardContent="Integrity"/>
              </div>
              <div ref = {(el)=> rightCardsRefs.current[1] = el} style = {{alignSelf:"flex-start"}}>
                <Card cardImage  = "/p4.png" cardContent="Commitment"/>
              </div>
              <div ref = {(el)=> rightCardsRefs.current[2] = el} style = {{alignSelf : "flex-end"}}>
                <Card cardImage  = "/p6.png" cardContent="Patience"/>
              </div>
            </div>
          </div>

          <div style = {{marginTop:"15%",fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"5vh" }} id = "stripe">
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
      </div>
      </Desktop>
      <Tablet>
        <div style={{ display: "flex", minHeight: "150vh" , flexDirection:"column", alignItems:"center" }} id="scrollSection">
          <div style = {{display:"flex", flexDirection:"column", width:"95vw"}}>
            <div className = "text-4xl seq font-bold" style = {{position:"relative", fontFamily:"Gotham",display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center",height:"35vh"}}>
              <img id = "ufo" style={{left:"-10%",top:"-50%",position:"absolute", height:"60vh", width:"50vw"}} src = "/ufo.svg"></img>
              <div style = {{display:"flex", justifyContent:"center", alignItems:"center", height:"20vh"}}>
                <div>
                  My design ethos centers around <span style = {{color:"#ADE1FF"}}> user-centric </span> solutions

                  and  <span style = {{color:"#ADE1FF"}}> cross disciplinary </span> collaboration.
                </div>
              </div>
            </div>
            <div>     
            </div>
            <div style={{display:"flex"}}>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "30vw" }} id="leftSection">
                <div ref = {(el)=> leftCardsRefs.current[0] = el} style = {{}}>
                  <Card cardImage  = "/p1.png" cardContent="Empathy"/>
                </div>
                <div ref = {(el)=> leftCardsRefs.current[1] = el} style  = {{}}>
                  <Card cardImage  = "/p3.png" cardContent="Teamwork"/>
                </div>
                <div ref = {(el)=> leftCardsRefs.current[2] = el} style = {{}}>
                  <Card cardImage  = "/p5.png" cardContent="Dedication"/>
                </div>
              </div>

              <div style={{display: "flex", minHeight: "100vh", width: "35vw" }} id="midSection">
                <div ref = {(el)=> midCardRef.current = el}  style = {{width:"100%", justifyItems:"center", alignSelf:"flex-start"}}>
                  <div style = {{ display:"flex", flexDirection:"column", justifyContent:"space-between", borderRadius:"5%", alignItems:"center", minHeight:"70vh"}}>
                    <div className = "text-bold text-2xl" id="section-1" style = {{fontFamily:"Gotham", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <div>
                          I enjoy Turning 
                        </div>
                          Stories into Realities
                        <div>
                        </div>
                    </div>

                    <div id="section-2" className="text-bold text-5xl" style = {{fontFamily:"Helios Pro", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                      <div>
                        My
                      </div>
                      <div>
                        Playground
                      </div>
                    </div>

                    <div id="section-3" className = "text-bold text-2xl" style = {{fontFamily:"Gotham",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                      <div>
                        I enjoy Turning
                      </div>

                      <div>
                        Stories into Realities
                      </div>
                    </div>
                    <div id="section-4" style = {{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                        Know More
                      </button>
                      </motion.div>
                    </div>

                  </div>
                </div>
              </div>

              <div style={{  display: "flex", flexDirection: "column", minHeight: "100vh", width: "30vw"}} id="rightSection">
              <div ref = {(el)=> rightCardsRefs.current[0] = el} style = {{}}>
                  <Card cardImage  = "/p2.png" cardContent="Integrity"/>
                </div>
                <div ref = {(el)=> rightCardsRefs.current[1] = el} style = {{}}>
                  <Card cardImage  = "/p4.png" cardContent="Commitment"/>
                </div>
                <div ref = {(el)=> rightCardsRefs.current[2] = el} style = {{}}>
                  <Card cardImage  = "/p6.png" cardContent="Patience"/>
                </div>
              </div>
            </div>
          </div>

          

          <div style = {{marginTop:"35%",fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"3vh" }} id = "stripe">
            <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
            </span>
            <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
            </span>
          </div>
        </div>
      </Tablet>
      <Mobile>
      <div style={{ display: "flex", minHeight: "150vh" , flexDirection:"column", alignItems:"center" }} id="scrollSection">
        <div style = {{display:"flex", flexDirection:"column", width:"95vw",alignItems:"center"}}>
          <div className = "text-2xl seq font-bold" style = {{position:"relative", fontFamily:"Gotham",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",height:"30vh", width:"95vw", textAlign:"center"}}>
            <img id = "ufo" style={{left:"-10%",top:"-50%",position:"absolute", height:"60vh", width:"50vw"}} src = "/ufo.svg"></img>
            <div>
              My design ethos centers around <span style = {{color:"#ADE1FF"}}> user-centric </span> solutions
            </div>
            <div>
              and  <span style = {{color:"#ADE1FF"}}> cross disciplinary </span> collaboration.
            </div>
          </div>
          <div id="section-2" className="text-bold text-5xl" style = {{fontFamily:"Helios Pro", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height:"25vh"}} >
            <div>
              My
            </div>
            <div>
              Playground
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center", width:"100%", minHeight:"210"}}>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "210vh", justifyContent:"space-between", alignItems:"center", width:"100%" }} id="leftSection">
              <div ref = {(el)=> leftCardsRefs.current[0] = el} style = {{}}>
                <CardMobil cardImage  = "/p1.png" cardContent="Empathy"/>
              </div>
              <div ref = {(el)=> leftCardsRefs.current[1] = el} style  = {{}}>
                <CardMobil cardImage  = "/p2.png" cardContent="Integrity"/>
              </div>
              <div ref = {(el)=> leftCardsRefs.current[2] = el} style = {{}}>
                <CardMobil cardImage  = "/p3.png" cardContent="Teamwork"/>
              </div>
              <div ref = {(el)=> rightCardsRefs.current[0] = el} style = {{}}>
                  <CardMobil cardImage  = "/p4.png" cardContent="Commitment"/>
                </div>
                <div ref = {(el)=> rightCardsRefs.current[1] = el} style = {{}}>
                  <CardMobil cardImage  = "/p5.png" cardContent="Dedication"/>
                </div>
                <div ref = {(el)=> rightCardsRefs.current[2] = el} style = {{}}>
                  <CardMobil cardImage  = "/p6.png" cardContent="Patience"/>
                </div>
 
              </div>
              
          </div>
          <div style = {{display:"flex", justifyContent:"center", alignContent:"center", minHeight:"20vh"}}>
            <motion.div style = {{display:"flex", justifyContent:"center", flexDirection:"column",minHeight:"5vh"}}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
            <button style = {{justifyContent:"center"}}  onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
              Know More
            </button>
            </motion.div>
          </div>

          {/* <div style = {{fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"3vh" }} id = "stripe">
            <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p style = {{}}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
            </span>
            <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Systems Thinking</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Visual Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>User Experience</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Service Design</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
                <p ref={null}>Retail</p>
                <p><img style = {{maxHeight:"2vh"}}src = "/star.svg"></img></p>
            </span>
          </div> */}
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default CardsSpiral;