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


const AboutMe  = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    const [isDesktop, setisDesktop] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const aboutSectionIntro = "Committed designer with a focus on sustainable living, intrigued by geopolitics, dedicated to animal welfare, and a fitness enthusiast. My design ethos centers around user-centric solutions and cross-disciplinary collaboration";
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

    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []); 
    


    return(
        <>
        {isLoading?<Loading/>:(
            <div style = {{backgroundColor:"black", minHeight:"100vh"}}>
                <Header/>
                <Cursor isDesktop = {isDesktop}/>
                <div id = "home">
                    <SectionHeading sectionContent = {aboutSectionIntro}/>
                </div>
                <div id = "about">
                    <MyInfo sectionContent = {myInfo}/>
                </div>
                <div id = "animal rescue">
                    <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Animal Rescue" numCards={3} imageArr={imageAnimalRescue}/>
                </div>
                <div id = "wanderlust">
                    <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Wanderlust" numCards={6} imageArr={imageWanderLust}/>
                </div>
                <div id = "photo journal">
                    <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Photo Journal" numCards={9} imageArr={imagePhotoJournal}/>
                </div>
                <div id = "fitness">
                    <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Fitness" numCards= {null} imageArr={null}/>
                </div>
                <BackToTop/>
            </div>)
        }
        </>
    )
}

export default AboutMe;