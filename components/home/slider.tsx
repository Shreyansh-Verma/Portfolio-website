import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { useRouter } from 'next/router';
import {motion} from "framer-motion";

function Slider({height, width, sliderRate}:{height:string, width:string, sliderRate:number}) {

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

  const classvalue = "inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300";

  return (
    <div style = {{height:height}} className = "relative flex items-center">
        <MdChevronLeft style = {{height:height, borderTopLeftRadius:"5%", borderBottomLeftRadius:"5%"}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideLeft} size = {40}/>
        <div id = "slider" className = "w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            
            <motion.img 
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
            </motion.img>

        </div>
        <MdChevronRight style = {{height:height, borderTopRightRadius:"5%", borderBottomRightRadius:"5%"}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideRight} size = {40}/>
    </div>
  );
}

export default Slider;
