import {useState} from "react";
import Cursor from "@/components/common/cursor";
import Header from "@/components/common/headerAbout";

import SectionHeading from "@/components/home/sectionHeading";
import MyInfo from "@/components/home/myInfo";
import AboutContent from "@/components/home/aboutContent";
import BackToTop from "@/components/home/backToTop";


const AboutMe  = ()=>{

    const [isDesktop, setisDesktop] = useState(true);

    const aboutSectionIntro = "Committed designer with a focus on sustainable living, intrigued by geopolitics, dedicated to animal welfare, and a fitness enthusiast. My design ethos centers around user-centric solutions and cross-disciplinary collaboration";
    const myInfo = "A dynamic experience designer with a versatile skill set . I thrive on articulating the PURPOSE and the RIGHT METHOD behind every design, seeking to create impactful experiences that resonate with users on a deeper level.A dynamic experience designer with a versatile skill set . I thrive on articulating the PURPOSE and the RIGHT METHOD behind every design, seeking to create impactful experiences that resonate with users on a deeper level.";

    return(
        <div style = {{backgroundColor:"black"}}>
            <Header/>
            <Cursor isDesktop = {isDesktop}/>
            <SectionHeading sectionContent = {aboutSectionIntro}/>
            <MyInfo sectionContent = {myInfo}/>
            <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Heading" />
            <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Heading" />
            <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Heading" />
            <AboutContent sectionContent={aboutSectionIntro} sectionHeading="Heading" />
            <BackToTop/>
        </div>
    )
}

export default AboutMe;