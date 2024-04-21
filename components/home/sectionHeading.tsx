import {motion} from "framer-motion";
import { gsap, Linear } from "gsap";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'




const SectionHeading = ({sectionContent, sectionHeight}:{sectionContent:string, sectionHeight:string}) => {

    const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 });
        return isDesktop ? <>{children}</> : null;
      };
      
      const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
        return isTablet ? <>{children}</> : null;
      };
      
      const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 });
        return isMobile ? <>{children}</> : null;
      };
      
      const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 });
        return isNotMobile ? <>{children}</> : null;
      };


    useEffect(()=>{
        let mn = gsap.matchMedia();

        // ScrollTrigger.refresh();

        mn.add("(min-width: 760px)", () => {
            gsap.to('#astro  ', {
                scrollTrigger: {
                    trigger: '#div1',
                    start: 'top top',
                    // markers:true,
                    scrub: 1.9,
                    invalidateOnRefresh: true,
                },
                // scale:1,
                rotate:80,
                scale:"1.3"
            })
        })

   
    },[])

   

    return(
        <>
        <Desktop>
            <div id = "div1" 
                style = {{backgroundColor:"black", position:"relative"}}>
                    <img style = {{position:"absolute", left:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo2.png"></img>

                    <div
                    id = "astro" style = {{position:"absolute", right:"0%", top:"25%"}}>
                        <img src = "/aboutSection/astro.svg"></img>
                    </div>

                    <motion.div id = "motionDiv"
                        initial={{ opacity: 0,  x:-500}}
                        whileInView={{ opacity: 1,  x: 0 }}
                        transition={{duration:1}}
                    className = "text-3xl" style = {{textAlign:"center",fontFamily:"Helios Pro",minHeight:sectionHeight, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{display:"flex", justifyContent:"center",alignItems:"center", width:"80vw", height:"60vh"}}>
                            <p style = {{textAlign:"center"}}>{sectionContent}</p>
                        </div>
                    </motion.div>
            </div>
        </Desktop>
        <Tablet>
            <div id = "div1" 
                style = {{backgroundColor:"black", position:"relative"}}>
                    <img style = {{position:"absolute", left:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo2.png"></img>

                    <div
                    id = "astro" style = {{position:"absolute", right:"0%", top:"0%", zIndex:"1"}}>
                        <img src = "/aboutSection/astro.svg"></img>
                    </div>
                    <motion.div id = "motionDiv"
                        initial={{ opacity: 0,  x:-500}}
                        whileInView={{ opacity: 1,  x: 0 }}
                        transition={{duration:1}}
                    className = "text-3xl" style = {{textAlign:"center",fontFamily:"Helios Pro",minHeight:sectionHeight, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{display:"flex", justifyContent:"center",alignItems:"center", width:"80vw", height:"60vh"}}>
                            <p style = {{textAlign:"center"}}>{sectionContent}</p>
                        </div>
                    </motion.div>
            </div>
        </Tablet>
        <Mobile>
        <div id = "div1" 
                style = {{backgroundColor:"black", position:"relative"}}>
                    <img style = {{position:"absolute", left:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo1.png"></img>
                    <img style = {{position:"absolute", right:"0%"}} src = "/aboutSection/logo2.png"></img>

                    <div
                    id = "astro" style = {{position:"absolute", right:"0%", top:"0", zIndex:"1"}}>
                        <img src = "/aboutSection/astro.svg"></img>
                    </div>
                    <motion.div id = "motionDiv"
                        initial={{ opacity: 0,  x:-200}}
                        whileInView={{ opacity: 1,  x: 0 }}
                        transition={{duration:1}}
                        className = "text-2xl" style = {{textAlign:"center",fontFamily:"Helios Pro",minHeight:sectionHeight, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{display:"flex", justifyContent:"center",alignItems:"center", width:"80vw", height:"60vh"}}>
                            <p style = {{textAlign:"center"}}>{sectionContent}</p>
                        </div>
                    </motion.div>
            </div>
        </Mobile>
        </>
    );
}
export default SectionHeading;