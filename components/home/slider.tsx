import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { useRouter } from 'next/router';
import { FaArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion";

const Card = ({cardWidth, cardHeight, firstImg, secondImg, projLoc, firstText, secondText, scale} : {cardWidth:string, cardHeight:string, firstImg:string, secondImg:string, projLoc:string, firstText:string, secondText:string, scale:string}) =>{
  const [hovered, setHovered] = React.useState(false);
  const router = useRouter();

  const handleClick = ({path}:{path:string}) => {
      router.push(path); // Replace '/abc' with the route you want to navigate to
  };


  const handleHover = () => {
      setHovered(true);
    };
  
    const handleMouseOut = () => {
      setHovered(false);
    };

  return(
      <motion.div
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
       onClick={()=>handleClick({path:projLoc})} 
       style = {{scale:scale,overflow:"hidden",position:"relative",borderRadius:"3%",width:cardWidth, height:cardHeight,transform: hovered ? "scale(1.05)" : "scale(1)",
      transition: "transform 0.3s ease",boxShadow: hovered ? "0 0 20px 5px rgba(255, 255, 255, 0.7)" : "none", cursor: "pointer" // Add white shadow when hovered
  }}   onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}>
          <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: hovered ? 1 : 0, rotate: hovered ? -45 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: "absolute", top: "3%", left: "3%" }}
              
          >
              <FaArrowRight color='black' style={{ height: "3vw", width: "3vw", backgroundColor: "white", borderRadius: "50%" }} />
          </motion.div>
          <div style = {{height:"85%", backgroundImage:`url(${hovered ? firstImg : secondImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
              >

          </div>
          <div style = {{height:"15%", backgroundColor:"black", overflowY:"hidden", display:"flex", justifyContent:"center"}}>
              <motion.div
                  initial={{ y: hovered ? "0%" : "-50%" }}
                  animate={{ y: hovered ? "-50%" : "0%" }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "95%", height:"200%" ,display:"flex", flexDirection:"column"}}
              >
                  <div style  = {{display:"flex",alignItems:"center",flex:"1"}}>
                      <div>
                          {firstText}
                      </div>
                  </div>
                  <div style = {{display:"flex",alignItems:"center",flex:"1"}}>
                      <div>
                          {secondText}
                      </div>
                  </div>
              </motion.div>
          </div>
      </motion.div>   
  );
}

function Slider({height, width, sliderRate, scale}:{height:string, width:string, sliderRate:number, scale:string}) {

  const router = useRouter();

  const [hovered, setHovered] = React.useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - sliderRate;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + sliderRate;
  }

  const projectImages = [
    '/projects/crocs/cards/image1.png',
    '/projects/decentralize/cards/image1.png',
    '/projects/orthoCenter/cards/image1.gif',
    '/projects/chirpy/cards/image1.png',
    '/projects/mithilaMakhana/cards/image1.png',
    '/projects/cognitiveErgonomics/cards/image1.png',
    '/projects/qissaUX/cards/image1.png',
    '/projects/qissaUI/cards/image1.png',
    '/projects/sniffAndSipp/cards/image1.png',
    '/projects/letaSobierajski/cards/image1.png',
    '/projects/bhaavi/cards/image1.png',
    '/projects/lullabyLand/cards/image1.png',
  ]

  const projectLinks = [
    "/crocs",
    "/decentralizationOfEnergy",
    "/orthoCenter",
    "/chirpyChips",
    "/mithilaMakhana",
    "/cognitiveErgonomics",
    "/qissaUX",
    "/qissaUI",
    "/sniffAndSipp",
    "/letaSobierajski",
    "/bhaavi",
    "/lullabyLand",
  ]

  const handleButtonClick = ({path}:{path:string}) => {
    router.push(path); 
  };

  const projectLocation = [
    "/crocs",
    "/decentralizationOfEnergy",
    "/orthoCenter",
    "/chirpyChips",
    "/mithilaMakhana",
    "/cognitiveErgonomics",
    "/qissaUX",
    "/qissaUI",
    "/sniffAndSipp",
    "/letaSobierajski",
    "/bhaavi",
    "/lullabyLand",
];

const firstText = [
    "Experience Redesigned",
    "Decentralization of Energy",
    "Ortho Centre",
    "Chirpy Chips",
    "Mithila Makhana",
    "Aksh",
    "Qissa",
    "Qissa Mobile App",
    "Sniff & Sipp",
    "Leta Sobierajski",
    "Bhaavi",
    "Lullaby Land",
];

const secondText = [
    "Revamping the Jibbitz buying experience",
    "Systems Thinking | Retail Business Strategy",
    "Rebranding",
    "Branding",
    "Branding and Packaging",
    "UI/UX |Cognitive Ergonomics",
    "UX Research | Service Design",
    "UX Research | Service Design",
    "Branding",
    "Editorial Design",
    "Fixture Design for Momo vendors",
    "A kids furniture collection",
];


const secondImage  = [
    '/projects/crocs/cards/image1.png',
    '/projects/decentralize/cards/image1.png',
    '/projects/orthoCenter/cards/image1.gif',
    '/projects/chirpy/cards/image1.png',
    '/projects/mithilaMakhana/cards/image1.png',
    '/projects/cognitiveErgonomics/cards/image1.png',
    '/projects/qissaUX/cards/image1.png',
    '/projects/qissaUI/cards/image1.png',
    '/projects/sniffAndSipp/cards/image1.png',
    '/projects/letaSobierajski/cards/image1.png',
    '/projects/bhaavi/cards/image1.png',
    '/projects/lullabyLand/cards/image1.png',
];

const firstImage = [
    '/projects/crocs/cards/image2.png',
    '/projects/decentralize/cards/image2.png',
    '/projects/orthoCenter/cards/image2.png',
    '/projects/chirpy/cards/image2.png',
    '/projects/mithilaMakhana/cards/image2.png',
    '/projects/cognitiveErgonomics/cards/image2.png',
    '/projects/qissaUX/cards/image2.png',
    '/projects/qissaUI/cards/image2.png',
    '/projects/sniffAndSipp/cards/image2.png',
    '/projects/letaSobierajski/cards/image2.png',
    '/projects/bhaavi/cards/image2.png',
    '/projects/lullabyLand/cards/image2.png',
];

  const classvalue = "inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300";

  return (
    <div style = {{height:height}} className = "relative flex items-center">
        <MdChevronLeft style = {{height:height, borderTopLeftRadius:"5%", borderBottomLeftRadius:"5%", scale:scale}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideLeft} size = {40}/>
        <div id = "slider" className = "w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[0]} secondImg={secondImage[0]} projLoc={projectLocation[0]} firstText={firstText[0]} secondText={secondText[0]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[1]} secondImg={secondImage[1]} projLoc={projectLocation[1]} firstText={firstText[1]} secondText={secondText[1]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[2]} secondImg={secondImage[2]} projLoc={projectLocation[2]} firstText={firstText[2]} secondText={secondText[2]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[3]} secondImg={secondImage[3]} projLoc={projectLocation[3]} firstText={firstText[3]} secondText={secondText[3]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[4]} secondImg={secondImage[4]} projLoc={projectLocation[4]} firstText={firstText[4]} secondText={secondText[4]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[5]} secondImg={secondImage[5]} projLoc={projectLocation[5]} firstText={firstText[5]} secondText={secondText[5]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[6]} secondImg={secondImage[6]} projLoc={projectLocation[6]} firstText={firstText[6]} secondText={secondText[6]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[7]} secondImg={secondImage[7]} projLoc={projectLocation[7]} firstText={firstText[7]} secondText={secondText[7]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[8]} secondImg={secondImage[8]} projLoc={projectLocation[8]} firstText={firstText[8]} secondText={secondText[8]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[9]} secondImg={secondImage[9]} projLoc={projectLocation[9]} firstText={firstText[9]} secondText={secondText[9]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[10]} secondImg={secondImage[10]} projLoc={projectLocation[10]} firstText={firstText[10]} secondText={secondText[10]} scale={scale}/>
                </div>
                <div className = {classvalue}>
                  <Card cardHeight={height} cardWidth={width} firstImg={firstImage[11]} secondImg={secondImage[11]} projLoc={projectLocation[11]} firstText={firstText[11]} secondText={secondText[11]} scale={scale}/>
                </div>


            {/* <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[0]})}} className = {classvalue} src = {projectImages[0]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[1]})}} className = {classvalue} src = {projectImages[1]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[2]})}} className = {classvalue} src = {projectImages[2]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[3]})}} className = {classvalue} src = {projectImages[3]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[4]})}} className = {classvalue} src = {projectImages[4]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[5]})}} className = {classvalue} src = {projectImages[5]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[6]})}} className = {classvalue} src = {projectImages[6]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[7]})}} className = {classvalue} src = {projectImages[7]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[8]})}} className = {classvalue} src = {projectImages[8]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[9]})}} className = {classvalue} src = {projectImages[9]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[10]})}} className = {classvalue} src = {projectImages[10]}>
            </motion.img>

            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style = {{height:height, width: width,borderRadius:"5%",
              transition: "transform 0.1s ease", cursor: "pointer"}} 
              onClick={()=>{handleButtonClick({path:projectLinks[11]})}} className = {classvalue} src = {projectImages[11]}>
            </motion.img> */}

        </div>
        <MdChevronRight style = {{height:height, borderTopRightRadius:"5%", borderBottomRightRadius:"5%", scale:scale}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideRight} size = {40}/>
    </div>
  );
}

export default Slider;
