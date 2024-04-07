import React from 'react';
import Typewriter from 'typewriter-effect';

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

const cardContentArr = [
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
  "A dynamic experience designer with versatile skill set. I thrive on articulating the PURPOSE and the RIGHT METHOD behind every seeking to create impactful experiences that resonate with users on a deeper level",
]

function NewSkills() {
  return (
    <div style = {{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
      <div style = {{display:"flex", flexDirection:"column" ,minHeight:"20vh", minWidth:"100vw",  marginTop:"5%"}} id="headingSection">
        <div style = {{minHeight:"20%", fontFamily:"Gotham"}}>
          <p className = "text-2xl" style={{marginLeft:"3.2%"}}>Skills</p>
        </div>
      <div style = {{display:"flex", alignItems:"center", minHeight:"20vh"}}>
        <p className = "text-6xl" style = {{marginLeft:"3.2%", fontFamily:"Helios Pro"}}>I can help you with</p>
      </div>
      </div>
      <div id = "contentSection" style = {{display:"flex", width:"100vw", justifyContent:"space-around"}}>
          <SkillCard cardNumber = "1" cardContent={cardContentArr[0]} cardTitle='Visual Desigh'/>
          <SkillCard cardNumber = "2" cardContent={cardContentArr[1]} cardTitle="UI/UX"/>
          <SkillCard cardNumber = "3" cardContent={cardContentArr[2]} cardTitle='Service Design'/>
          <SkillCard cardNumber = "4" cardContent={cardContentArr[3]} cardTitle='Experience Design'/>
      </div>
    </div>
  );
}

export default NewSkills;
