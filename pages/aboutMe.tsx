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
    const myInfo = "I'm Tanisha Verma, currently pursuing M.Des at National Institute of Design, Bangalore and a graduate of B.Des from Indian Institute of Crafts and Design, Jaipur. Throughout my design journey, I've grown, emphasizing ethical design, right research methodologies and fostering deep user connections for understanding their true needs.";

    const animalRescueInfo = "As a passionate animal rescuer and active volunteer with two NGOs, I immerse myself in their world, understanding their emotions deeply.";
    const wanderLustInfo = "As a solo explorer, I seek inspiration in remote landscapes, connecting with diverse communities, crafting stories, friendships, and enriching my design perspective.";
    const photoJournalInfo = "Capturing emotions through portraits is my passion; I cherish the stories conveyed when eyes meet the lens, revealing profound narratives.";
    const fitnessInfo = "For seven years, I've immersed myself in fitness, guiding and motivating others towards a healthier lifestyle, having trained over ten individuals.";

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
                    <SectionHeading sectionContent = {aboutSectionIntro} sectionHeight="100vh"/>
                </div>
                <div id = "about">
                    <MyInfo sectionContent = {myInfo}/>
                </div>
                <div id = "animal rescue">
                    <AboutContent sectionContent={animalRescueInfo} sectionHeading="Animal Rescue" numCards={3} imageArr={imageAnimalRescue}/>
                </div>
                <div id = "wanderlust">
                    <AboutContent sectionContent={wanderLustInfo} sectionHeading="Wanderlust" numCards={6} imageArr={imageWanderLust}/>
                </div>
                <div id = "photo journal">
                    <AboutContent sectionContent={photoJournalInfo} sectionHeading="Photo Journal" numCards={9} imageArr={imagePhotoJournal}/>
                </div>
                <div id = "fitness">
                    <AboutContent sectionContent={fitnessInfo} sectionHeading="Fitness" numCards= {null} imageArr={null}/>
                </div>
                <BackToTop/>
            </div>)
        }
        </>
    )
}

export default AboutMe;