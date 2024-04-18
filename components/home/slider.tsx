import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { useRouter } from 'next/router';


function Slider({height, width}:{height:string, width:string}) {

  const router = useRouter();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const projectImages = [
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
    "/dogs.png",
  ]

  const projectLinks = [
    "/aboutMe",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
    "/link",
  ]

  const handleButtonClick = ({path}:{path:string}) => {
    router.push(path); 
  };

  const classvalue = "inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300";

  return (
    <div style = {{height:height}} className = "relative flex items-center">
        <MdChevronLeft style = {{height:height}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideLeft} size = {40}/>
        <div id = "slider" className = "w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[0]})}} className = {classvalue} src = {projectImages[0]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[1]})}} className = {classvalue} src = {projectImages[1]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[2]})}} className = {classvalue} src = {projectImages[2]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[3]})}} className = {classvalue} src = {projectImages[3]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[4]})}} className = {classvalue} src = {projectImages[4]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[5]})}} className = {classvalue} src = {projectImages[5]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[6]})}} className = {classvalue} src = {projectImages[6]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[7]})}} className = {classvalue} src = {projectImages[7]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[8]})}} className = {classvalue} src = {projectImages[8]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[9]})}} className = {classvalue} src = {projectImages[9]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[10]})}} className = {classvalue} src = {projectImages[10]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[11]})}} className = {classvalue} src = {projectImages[11]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[12]})}} className = {classvalue} src = {projectImages[12]}></img>
            <img style = {{height:height, width: width}} onClick={()=>{handleButtonClick({path:projectLinks[13]})}} className = {classvalue} src = {projectImages[13]}></img>
        </div>
        <MdChevronRight style = {{height:height}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideRight} size = {40}/>
    </div>
  );
}

export default Slider;
