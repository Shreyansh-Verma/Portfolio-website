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



import React, { useEffect, useRef } from 'react';
// import './introPage.css';

const IntroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tl = useRef();
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
    		gsap.from('#imgWrapper', {
			scrollTrigger: {
				trigger: '#div2',
				start: 'top 60%',
        end: 'top 20%',
        markers:true,
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
        markers:true,
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
        markers:true,
				scrub: 1.9
			},
			yPercent: 60,
      // scale: 1.5
		})
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

  

  return (
    <div id="div2" style={{display:"flex", justifyContent:"space-between", backgroundColor: "black", minHeight: "100vh"}}>
      <div id="imgWrapper" style  = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", position:"relative",minWidth:"50%", minHeight: "100vh"}}>
        <div style = {{zIndex:"2",minHeight:"20vh", border:"1px solid white", borderRadius:"3%", minWidth:"40vw", backgroundColor:"rgba(0,0,0,0.75)"}}>
          <div style ={{display:"flex", justifyContent:"center",  flexDirection:"column", padding:"2%", fontFamily:"Gotham"}}>
            <div>Currently purusing M.Des in</div>
            <div><span style = {{fontFamily:"Helios Pro"}}>"Design for Retail Experience"</span> at</div>
            <div>National Institute of Design, Bengaluru</div>
          </div>
        </div>
        <img id="realImage2" style={{ position:"absolute", height:"100%", width:"100%"}} src="/aboutImg.png" alt="Intro" />
      </div>
      <div id = "aboutInfo" style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", minWidth:"50%", border:"3px solid #d9d9d9", borderRadius:"1%", backgroundImage: `url(/aboutSection.png)` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <div id="headingContent" style = {{minHeight:"20%",display:"flex",justifyContent: "Center", alignItems: "Center" }}>
          <h1 style = {{fontFamily:"Helios Pro",	fontSize: "70px", color: "#fff"}}>
              About
          </h1>
        </div>
        <div id="contentContent" style = {{display:"flex", minHeight:"60%", justifyContent:"center", fontFamily:"Helios Pro"}}>
          <p style={{margin:"2%", fontFamily:"Gotham", fontSize: "20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
							aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas voluptatum hic
							enim quo provident culpa possimus cupiditate! Dolorum quae doloremque cum rerum ipsam
							inventore beatae, at odit, velit, aspernatur minima! Corporffis</p>
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
  );
};

export default IntroSection;

