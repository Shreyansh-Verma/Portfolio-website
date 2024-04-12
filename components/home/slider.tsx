import Typewriter from 'typewriter-effect';
import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


function Slider({height, width}:{height:string, width:string}) {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const classvalue = "inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300";

  return (
    <div style = {{height:height}} className = "relative flex items-center">
        <MdChevronLeft style = {{height:height}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideLeft} size = {40}/>
        <div id = "slider" className = "w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
            <img style = {{height:height, width: width}} className = {classvalue} src = "/dogs.png"></img>
        </div>
        <MdChevronRight style = {{height:height}} className = "opacity-50 cursor-pointer hover:opacity-100 bg-black" onClick={slideRight} size = {40}/>
    </div>
  );
}

export default Slider;
