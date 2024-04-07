import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

function NewCollaboration()
{
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const fourthText = useRef(null);

    let xPercent = 0;
    let xPercentSecond = 0;
    
    useEffect( () => {
  
      gsap.set(secondText.current, {xPercent: 102})

      gsap.set(fourthText.current, {xPercent: -102})
    
      requestAnimationFrame(animate);
      requestAnimationFrame(animateSecond);
    
    }, [])
    
    let xPercentOne = 0;
  
    let xPercentTwo = 102;

    let xPercentOneSecond = 0;
  
    let xPercentTwoSecond = -102;


    const animateSecond = () => {

  
        if(xPercentSecond > 102){
      
          // xPercent = -10;
          xPercentSecond  = 0;
          if (xPercentOneSecond>102)
            {
              xPercentOneSecond = -102;
            }
            else
            {
              xPercentTwoSecond = -102;
            }
          // xPercentOne = -100;
          // xPercentTwo = -100;
      
        }
    
        // console.log("x percent = ",xPercent);
      
        gsap.set(thirdText.current, {xPercent: xPercentOneSecond})
      
        gsap.set(fourthText.current, {xPercent: xPercentTwoSecond})
      
        requestAnimationFrame(animateSecond);
      
        xPercentSecond += 0.1;
        xPercentOneSecond += 0.1;
        xPercentTwoSecond += 0.1
      
      }
    
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
      }
  
    
      gsap.set(firstText.current, {xPercent: xPercentOne})
    
      gsap.set(secondText.current, {xPercent: xPercentTwo})
    
      requestAnimationFrame(animate);
    
      xPercent -= 0.1;
      xPercentOne -= 0.1;
      xPercentTwo -= 0.1
    
    }

    return (
        <div style = {{fontWeight:"10",display :"flex", minHeight:"30vh", backgroundColor:"black", flexDirection:"column", fontFamily:"Gotham"}}>
            <div style = {{opacity:"0.8",fontSize:"1.6rem",minHeight:"10vh"}} id = "upperStripe">
                <span  ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p>             */}
                    <p style = {{}}>Visual Design</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}} ref={null}>User Experience</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}} ref={null}>Service Design</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}} ref={null}>Retail</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}} ref={null}>Systems Thinking</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}}>Visual Design</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}} ref={null}>User Experience</p>
                    <p style = {{}}><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                </span>
                <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                    <p ref={null}>Service Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Retail</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Systems Thinking</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Visual Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>User Experience</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Service Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Retail</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p> */}
                </span>
            </div>
            <div className = "text-6xl" style = {{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Helios Pro", minHeight:"30vh", width:"100vw"}} id = "middleText">
                <p>Interested in Collaboration?</p>
            </div>

            <div style = {{opacity:"0.8", minHeight:"10vh", fontSize:"1.6rem"}} id = "lowerStripe">
            <span ref={thirdText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
                {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p>             */}
                    <p style = {{}}>Visual Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>User Experience</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Service Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Retail</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Systems Thinking</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p style = {{}}>Visual Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>User Experience</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                </span>
                <span ref={fourthText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
                    <p ref={null}>Service Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Retail</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Systems Thinking</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Visual Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>User Experience</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Service Design</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                    <p ref={null}>Retail</p>
                    <p><img style = {{maxHeight:"5vh"}}src = "/star.svg"></img></p>
                {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p> */}
                </span>
            </div>
        </div>
    )
}

export default NewCollaboration;