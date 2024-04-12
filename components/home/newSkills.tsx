import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import {useMediaQuery} from 'react-responsive'

const SkillCard = ({cardNumber, cardTitle, cardContent}:{cardNumber:string, cardTitle:string, cardContent:string})=>{
  return(
    <div style = {{display:"flex", flexDirection:"column", minWidth:"18vw", justifyContent:"space-between", minHeight:"60vh"}}>
        <div className = "text-1xl" style = {{fontFamily:"Gotham"}} id = "cardHeading">
            <h1>{cardNumber}</h1>
            <div id = "separationLine" style = {{border:"1px solid white", width:"100%"}}></div>
        </div>
        <div className = "text-3xl" style = {{fontFamily:"Helios Pro", width :"10vw"}} id = "cardHeading">
          <h1>{cardTitle}</h1>
        </div>
        <div className = "text-1xl" id = "cardContent" style = {{fontFamily:"Gotham",minHeight:"40vh", width:"10vw", marginTop:"10%"}}>
          <p>{cardContent}</p>
        </div>
    </div>
  )
}

const SkillCardTablet = ({cardNumber, cardTitle, cardContent}:{cardNumber:string, cardTitle:string, cardContent:string})=>{
  return(
    <div style = {{display:"flex", flexDirection:"column", minWidth:"28vw", justifyContent:"space-between", minHeight:"60vh"}}>
        <div className = "text-2xl" style = {{fontFamily:"Gotham"}} id = "cardHeading">
            <h1>{cardNumber}</h1>
            <div id = "separationLine" style = {{border:"1px solid white", width:"100%"}}></div>
        </div>
        <div className = "text-3xl" style = {{fontFamily:"Helios Pro", width :"20vw"}} id = "cardHeading">
          <h1>{cardTitle}</h1>
        </div>
        <div className = "text-2xl" id = "cardContent" style = {{fontFamily:"Gotham",minHeight:"40vh", width:"25vw", marginTop:"10%"}}>
          <p>{cardContent}</p>
        </div>
    </div>
  )
}

const SkillCardMobile = ({cardNumber, cardTitle, cardContent}:{cardNumber:string, cardTitle:string, cardContent:string})=>{
  return(
    <div style = {{display:"flex", flexDirection:"column", minWidth:"100vw", alignItems:"center", minHeight:"60vh"}}>
        <div className = "text-2xl" style = {{display:"flex", flexDirection:"column",alignItems:"center",fontFamily:"Gotham", width:"100vw"}} id = "cardHeading">
            <div>
              <h1>{cardNumber}</h1>
            </div>
            <div id = "separationLine" style = {{height:"0",border:"1px solid white", width:"80vw"}}></div>
        </div>
        <div className = "text-3xl" style = {{display:"flex",justifyContent:"center",fontFamily:"Helios Pro", width :"60vw", textAlign:"center"}} id = "cardHeading">
          <h1>{cardTitle}</h1>
        </div>
        <div className = "text-2xl" id = "cardContent" style = {{display:"flex", justifyContent:"center",fontFamily:"Gotham",minHeight:"40vh", width:"60vw", marginTop:"10%", textAlign:"center"}}>
          <p>{cardContent}</p>
        </div>
    </div>
  )
}

const cardContentArr = [
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
]

function NewSkills() {

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
    gsap.to('#flyingAstro', {
			scrollTrigger: {
				trigger: '#skillsSection',
				start: 'top-=20 top',
				scrub: 1.9
			},
			x: "-100vw",
      y: "-25vh",
		})
  },[])
  return (
    <>
      <Desktop>
        <div id = "skillsSection" style = {{display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative"}}>
          <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"80vw", marginTop:"45vh"}} src = "/astro.svg"></img>
          <div style = {{display:"flex", flexDirection:"column" ,minHeight:"20vh", minWidth:"100vw",  marginTop:"5%"}} id="headingSection">
            <div style = {{minHeight:"20%", fontFamily:"Gotham"}}>
              <p className = "text-2xl" style={{marginLeft:"3.2%"}}>Skills</p>
            </div>
          <div style = {{display:"flex", alignItems:"center", minHeight:"20vh"}}>
            <p className = "text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>I can help you with</p>
          </div>
          </div>
          <div id = "contentSection" style = {{display:"flex", width:"100vw", justifyContent:"space-around", flexWrap:"wrap"}}>
              <SkillCard cardNumber = "1" cardContent={cardContentArr[0]} cardTitle='Visual Desigh'/>
              <SkillCard cardNumber = "2" cardContent={cardContentArr[1]} cardTitle="UI/UX"/>
              <SkillCard cardNumber = "3" cardContent={cardContentArr[2]} cardTitle='Service Design'/>
              <SkillCard cardNumber = "4" cardContent={cardContentArr[3]} cardTitle='Experience Design'/>
          </div>
        </div>
      </Desktop>
      <Tablet>
      <div id = "skillsSection" style = {{display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative"}}>
          <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"80vw", marginTop:"45vh"}} src = "/astro.svg"></img>
          <div style = {{display:"flex", flexDirection:"column" ,minHeight:"20vh", minWidth:"100vw",  marginTop:"5%"}} id="headingSection">
            <div style = {{minHeight:"20%", fontFamily:"Gotham"}}>
              <p className = "text-2xl" style={{marginLeft:"3.2%"}}>Skills</p>
            </div>
          <div style = {{display:"flex", alignItems:"center", minHeight:"20vh"}}>
            <p className = "text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>I can help you with</p>
          </div>
          </div>
          <div id = "contentSection" style = {{display:"flex", width:"100vw", justifyContent:"space-around", flexWrap:"wrap"}}>
            <div>
              <SkillCardTablet cardNumber = "1" cardContent={cardContentArr[0]} cardTitle='Visual Desigh'/>
              <SkillCardTablet cardNumber = "2" cardContent={cardContentArr[1]} cardTitle="UI/UX"/>
            </div>
            <div>
              <SkillCardTablet cardNumber = "3" cardContent={cardContentArr[2]} cardTitle='Service Design'/>
              <SkillCardTablet cardNumber = "4" cardContent={cardContentArr[3]} cardTitle='Experience Design'/>
             </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
      <div id = "skillsSection" style = {{display:"flex", flexDirection:"column", minHeight:"100vh", position:"relative"}}>
          <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"80vw", marginTop:"45vh"}} src = "/astro.svg"></img>
          <div style = {{display:"flex", flexDirection:"column" ,minHeight:"20vh", minWidth:"100vw",  marginTop:"5%"}} id="headingSection">
            <div style = {{minHeight:"20%", fontFamily:"Gotham"}}>
              <p className = "text-2xl" style={{marginLeft:"3.2%"}}>Skills</p>
            </div>
          <div style = {{display:"flex", alignItems:"center", minHeight:"20vh"}}>
            <p className = "text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>I can help you with</p>
          </div>
          </div>
          <div id = "contentSection" style = {{display:"flex", flexDirection:"column", width:"100vw", alignItems:"center"}}>
            <div>
              <SkillCardMobile cardNumber = "1" cardContent={cardContentArr[0]} cardTitle='Visual Desigh'/>
              <SkillCardMobile cardNumber = "2" cardContent={cardContentArr[1]} cardTitle="UI/UX"/>
              <SkillCardMobile cardNumber = "3" cardContent={cardContentArr[2]} cardTitle='Service Design'/>
              <SkillCardMobile cardNumber = "4" cardContent={cardContentArr[3]} cardTitle='Experience Design'/>
             </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default NewSkills;
