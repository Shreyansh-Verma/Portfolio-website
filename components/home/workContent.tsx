import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive'

const Card = ({cardWidth, cardHeight} : {cardWidth:string, cardHeight:string}) =>{
    const [hovered, setHovered] = useState(false);


    const handleHover = () => {
        setHovered(true);
      };
    
      const handleMouseOut = () => {
        setHovered(false);
      };

    return(
        <div style = {{position:"relative",borderRadius:"1%",width:cardWidth, height:cardHeight,transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease",boxShadow: hovered ? "0 0 20px 5px rgba(255, 255, 255, 0.7)" : "none", cursor: "pointer" // Add white shadow when hovered
    }}   onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}>
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: hovered ? 1 : 0, rotate: hovered ? -45 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", top: "3%", left: "3%" }}
                
            >
                <FaArrowRight color='black' style={{ height: "3vw", width: "3vw", backgroundColor: "white", borderRadius: "50%" }} />
            </motion.div>
            <div style = {{height:"85%", backgroundImage:`url(${hovered ? '/aboutSection/animalRescue/2.png' : '/aboutSection/animalRescue/1.png'})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
                >

            </div>
            <div style = {{height:"15%", backgroundColor:"black", overflowY:"hidden", display:"flex", justifyContent:"center"}}>
                <motion.div
                    initial={{ y: hovered ? "0%" : "-50%" }}
                    animate={{ y: hovered ? "-50%" : "0%" }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "95%", height:"200%" ,display:"flex", flexDirection:"column"}}
                >
                    <div style  = {{display:"flex",alignItems:"center",flex:"1"}}>
                        <div>
                            txt1
                        </div>
                    </div>
                    <div style = {{display:"flex",alignItems:"center",flex:"1"}}>
                        <div>
                            txt2
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>   
    );
}

const WorkContent = () => {

    const [screenWidth, setScreenWidth] = useState(0);

    React.useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateScreenWidth);

        // Call updateScreenWidth initially to set the initial screenWidth value
        updateScreenWidth();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    console.log("yo bro width = ",screenWidth); 
  
  
    const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isDesktop = screenWidth >= 992;
      return isDesktop ? <>{children}</> : null;
    };
  
    const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isTablet = screenWidth >= 768 && screenWidth < 992;
      console.log("isTablet = ",isTablet);
      return isTablet ? <>{children}</> : null;
    };
  
    const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isMobile = screenWidth < 768;
      console.log("isMobile = ",isMobile)
      return isMobile ? <>{children}</> : null;
    };
  
    const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isNotMobile = screenWidth >= 768;
      return isNotMobile ? <>{children}</> : null;
    };



  return (
    <>
     <Desktop>        
        <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", minHeight:"150vh"}}>
            <div style = {{width:"85vw", minHeight:"120vh"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Desktop>
    <Tablet>
    <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
            <div style = {{width:"95vw"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                    <div style = {{display:"flex", justifyContent:"space-between"}}>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                        <div style = {{display:"flex"}}>
                            <Card cardHeight='40vh' cardWidth='40vw'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Tablet>
    <Mobile>
    <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", border:"2px solid green"}}>
            <div style = {{width:"100vw"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                    <Card cardHeight='30vh' cardWidth='50vw'/>
                </div> 
            </div>
        </div>
    </Mobile>   
    </>
  );
}

export default WorkContent;
