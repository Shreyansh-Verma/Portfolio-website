import {useState, useEffect} from "react";
import Cursor from "@/components/common/cursor";
import Header from "@/components/common/headerAbout";
import Loading from "@/components/home/load";

import SectionHeading from "@/components/home/sectionHeading";
import MyInfo from "@/components/home/myInfo";
import AboutContent from "@/components/home/aboutContent";
import BackToTop from "@/components/home/backToTop";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Bhaavi = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    const [isDesktop, setisDesktop] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []); 
    
    
      const pageArr = [
        `url(/projects/chirpy/page1.svg)`,
        `url(/projects/chirpy/page2.png)`,
        `url(/projects/chirpy/page3.png)`,
      ]

      const containerStyle = {
        // overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch", // Adjusts the height of each div to fill the container vertically
        backgroundColor: "black",
        flexDirection:"column",
      };
    
      const divStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto", // Adjusts the background image size to fit the container width
        flex: "1", // To make the divs fill the entire container horizontally
        minHeight:"100vh",
      };


    return(
        <>
    {isLoading ? (
            <Loading />
        ) : (
            <>                                                                          
            <Cursor isDesktop={isDesktop} />                                                                                                                                                                                                                                            
            <div style = {{}}>
                <img style = {{height:"100%",width:"100%"}} src="/projects/bhaavi/page1.png"></img>
            </div>
            </>
        )}
        </>                                                                                                                                                                                                                                                                                                         
    )
}

export default Bhaavi;