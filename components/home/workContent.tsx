import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive'

const Card = ({cardWidth, cardHeight, firstImg, secondImg} : {cardWidth:string, cardHeight:string, firstImg:string, secondImg:string}) =>{
    const [hovered, setHovered] = useState(false);


    const handleHover = () => {
        setHovered(true);
      };
    
      const handleMouseOut = () => {
        setHovered(false);
      };

    return(
        <div style = {{overflow:"hidden",position:"relative",borderRadius:"3%",width:cardWidth, height:cardHeight,transform: hovered ? "scale(1.05)" : "scale(1)",
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
            <div style = {{height:"85%", backgroundImage:`url(${hovered ? firstImg : secondImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
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

    // console.log("yo bro width = ",screenWidth); 
  
  
    const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isDesktop = screenWidth >= 992;
      return isDesktop ? <>{children}</> : null;
    };
  
    // const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //   const isTablet = screenWidth >= 768 && screenWidth < 992;
    //   console.log("isTablet = ",isTablet);
    //   return isTablet ? <>{children}</> : null;
    // };
  
    const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isMobile = screenWidth < 992;
      console.log("isMobile = ",isMobile)
      return isMobile ? <>{children}</> : null;
    };
  
    const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isNotMobile = screenWidth >= 768;
      return isNotMobile ? <>{children}</> : null;
    };


    const secondImage  = [
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/projects/chirpy/cards/image1.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png',
        '/aboutSection/animalRescue/2.png'
    ];

    const firstImage = [
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/projects/chirpy/cards/image2.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png',
        '/aboutSection/animalRescue/1.png'
    ];



  return (
    <>
     <Desktop>        
        <div style = {{minHeight:"2700px",display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", backgroundColor:"black"}}>
            <div style = {{height:"2600px",width:"85vw", display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between"}}>
                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[0]} secondImg={secondImage[0]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[1]} secondImg={secondImage[1]}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[2]} secondImg={secondImage[2]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[3]} secondImg={secondImage[3]}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[4]} secondImg={secondImage[4]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[5]} secondImg={secondImage[5]}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[6]} secondImg={secondImage[6]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[7]} secondImg={secondImage[7]}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[8]} secondImg={secondImage[8]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[9]} secondImg={secondImage[9]}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[10]} secondImg={secondImage[10]}/>
                            <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[11]} secondImg={secondImage[11]}/>
                    </div>
            </div>
        </div>
    </Desktop>
    <Mobile>
         <div style = {{minHeight:"5400px",display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
            <div style = {{height:"5300px",display:"flex", flexDirection:"column",width:"95vw", alignItems:"center", justifyContent:"space-between"}}>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[0]} secondImg={secondImage[0]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[1]} secondImg={secondImage[1]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[2]} secondImg={secondImage[2]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[3]} secondImg={secondImage[3]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[4]} secondImg={secondImage[4]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[5]} secondImg={secondImage[5]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[6]} secondImg={secondImage[6]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[7]} secondImg={secondImage[7]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[8]} secondImg={secondImage[8]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[9]} secondImg={secondImage[9]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[10]} secondImg={secondImage[10]}/>
                <Card cardHeight='400px' cardWidth='450px' firstImg={firstImage[11]} secondImg={secondImage[11]}/>
            </div>
        </div>
    </Mobile>   
    </>
  );
}

export default WorkContent;
