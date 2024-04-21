import React from 'react';
import {useEffect, useState} from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () =>{
    const [backToTopButton , setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{                                                                                                                                                                                                         
            if(window.scrollY > 100){
                setBackToTopButton(true);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            }
            else
            {
                setBackToTopButton(false);
            }
        });
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        })
    }

    return (
        <div>
            {backToTopButton && 
            <FaArrowCircleUp 
            style = {{position:"fixed", right:"5vw", bottom:"0vw", height:"80px", width:"80px", cursor:"pointer"}}
            onClick = {scrollUp}
            />}
        </div>
    )
}

export default BackToTop;