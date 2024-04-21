import {useState, useEffect} from "react";
import Cursor from "@/components/common/cursor";
import Header from "@/components/common/headerWork";
import Loading from "@/components/home/load";

import SectionHeading from "@/components/home/sectionHeading";
import WorkContent from "@/components/home/workContent";
import MyInfo from "@/components/home/myInfo";
import AboutContent from "@/components/home/aboutContent";
import BackToTop from "@/components/home/backToTop";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const AboutMe  = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    const [isLoading, setIsLoading] = useState(true);

    const [isDesktop, setisDesktop] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []); 
    

    const aboutSectionIntro = "Visual Design | UI/UX | Service Design | Retail | Systems Thinking | Design Management";
    const myInfo = "A dynamic experience designer with a versatile skill set . I thrive on articulating the PURPOSE and the RIGHT METHOD behind every design, seeking to create impactful experiences that resonate with users on a deeper level.A dynamic experience designer with a versatile skill set . I thrive on articulating the PURPOSE and the RIGHT METHOD behind every design, seeking to create impactful experiences that resonate with users on a deeper level.";

    const imageAnimalRescue = [
        `url(/aboutSection/animalRescue/1.png)`,
        `url(/aboutSection/animalRescue/2.png)`,
        `url(/aboutSection/animalRescue/3.png)`,
    ];

    const imageWanderLust = [
        `url(/aboutSection/wanderLust/1.png)`,
        `url(/aboutSection/wanderLust/2.png)`,
        `url(/aboutSection/wanderLust/3.png)`,
        `url(/aboutSection/wanderLust/4.png)`,
        `url(/aboutSection/wanderLust/5.png)`,
        `url(/aboutSection/wanderLust/6.png)`
    ];

    const imagePhotoJournal = [
        `url(/aboutSection/photoJournal/1.png)`,
        `url(/aboutSection/photoJournal/2.png)`,
        `url(/aboutSection/photoJournal/3.png)`,
        `url(/aboutSection/photoJournal/4.png)`,
        `url(/aboutSection/photoJournal/5.png)`,
        `url(/aboutSection/photoJournal/6.png)`,
        `url(/aboutSection/photoJournal/7.png)`,
        `url(/aboutSection/photoJournal/8.png)`,
        `url(/aboutSection/photoJournal/9.png)`
    ];


    return(
        <>         
        {isLoading?<Loading/>:(<div style = {{backgroundColor:"black",  minHeight:"200vh"}}>
            <Header/>
            <Cursor isDesktop = {isDesktop}/>
            <div id = "home">
                <SectionHeading sectionContent = {aboutSectionIntro} sectionHeight="60vh"/>
            </div>
            <WorkContent/>
            <BackToTop/>
        </div>)}
        </>

    )
}

export default AboutMe;