import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import Carousel from 'react-bootstrap/Carousel';


const SkillCard = ({cardNumber, cardTitle, cardContent}:{cardNumber:string, cardTitle:string, cardContent:string})=>{
  return(
    <div style = {{display:"flex", flex:"0 0 auto", flexDirection:"column", width:"35vw", margin:"2%", justifyContent:"space-between", height:"45vh", backgroundColor:"white", borderRadius:"3%"}}>
        <div className = "text-1xl" style = {{fontFamily:"Gotham"}} id = "cardHeading">
            <h1>{cardNumber}</h1>
            <div id = "separationLine" style = {{border:"1px solid white", width:"100%"}}></div>
        </div>
        {/* <div className = "text-3xl" style = {{fontFamily:"Helios Pro", width :"10vw"}} id = "cardHeading">
          <h1>{cardTitle}</h1>
        </div> */}
        {/* <div className = "text-1xl" id = "cardContent" style = {{fontFamily:"Gotham",minHeight:"40vh", width:"10vw", marginTop:"10%"}}>
          <p>{cardContent}</p>
        </div> */}
    </div>
  )
}

const cardContentArr = [
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
]

function NewProject() {

  // useEffect(() => {
  //   gsap.to('#flyingAstro', {
	// 		scrollTrigger: {
	// 			trigger: '#skillsSection',
	// 			start: 'top-=20 top',
	// 			scrub: 1.9
	// 		},
	// 		x: "-100vw",
  //     y: "-25vh",
	// 	})
  // },[])
  return (
    <div id = "projectSection" style = {{display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative", justifyContent:"space-around"}}>
      <div style = {{display:"flex", flexDirection:"column" ,height:"15vh", minWidth:"100vw"}} id="headingSection">
        <div style = {{fontFamily:"Gotham"}}>
          <p className = "text-2xl" style={{marginLeft:"3.2%"}}>Projects</p>
        </div>
        <div style = {{display:"flex", alignItems:"center"}}>
          <p className = "text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>My Works</p>
        </div>
        <div style = {{display:"flex", fontFamily:"Gotham", flexDirection:"column"}}>
          <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>My contributions span across a spectrum of projects ecompassing visual design, branding, UI/UX, </p>
          <p className = "text-2xl" style = {{marginLeft:"3.2%"}}>service design, system design and retail design.</p>
        </div>
      </div>
      {/* <div id = "contentSection" style = {{display:"flex", minWidth:"10vw" , overflowX:"auto", marginLeft:"1.2%"}}>
          <SkillCard cardNumber = "1" cardContent={cardContentArr[0]} cardTitle='Visual Desigh'/>
          <SkillCard cardNumber = "2" cardContent={cardContentArr[1]} cardTitle="UI/UX"/>
          <SkillCard cardNumber = "3" cardContent={cardContentArr[2]} cardTitle='Service Design'/>
          <SkillCard cardNumber = "4" cardContent={cardContentArr[3]} cardTitle='Experience Design'/>
      </div> */}
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption><h1 style = {{width:"100vw"}}>First Image</h1></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption><h1 style = {{width:"100vw"}}>First Image</h1></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption><h1 style = {{width:"100vw"}}>First Image</h1></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption><h1 style = {{width:"100vw"}}>First Image</h1></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default NewProject;
