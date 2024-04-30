import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router';

const Card = ({cardWidth, cardHeight, firstImg, secondImg, projLoc, firstText, secondText, scale, isVideo} : {cardWidth:string, cardHeight:string, firstImg:string, secondImg:string, projLoc:string, firstText:string, secondText:string, scale:string, isVideo:boolean}) =>{
    const [hovered, setHovered] = useState(false);
    const router = useRouter();

    const handleClick = ({path}:{path:string}) => {
        router.push(path); // Replace '/abc' with the route you want to navigate to
    };


    const handleHover = () => {
        setHovered(true);
      };
    
      const handleMouseOut = () => {
        setHovered(false);
      };

    return(
        <motion.div
        whileTap={{ scale: 0.7 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
         onClick={()=>handleClick({path:projLoc})} 
         style = {{scale:scale,overflow:"hidden",position:"relative",borderRadius:"3%",width:cardWidth, height:cardHeight,transform: hovered ? "scale(1.05)" : "scale(1)",
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
            {/* <div style = {{height:"85%", backgroundImage:`url(${hovered ? firstImg : secondImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>


            </div> */}
            
            {
            isVideo?(
            hovered?
            (
            <div style = {{height:"85%", backgroundImage:`url(${firstImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            </div>
            )
            :(
            (<div style = {{height:"85%", backgroundImage:`url(${secondImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            </div>))):
            (
            hovered?
            (
            <div style = {{height:"85%", backgroundImage:`url(${firstImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            </div>
            )
            :(
            (<div style = {{height:"85%", backgroundImage:`url(${secondImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            </div>)))
            }

            <div style = {{height:"15%", backgroundColor:"black", overflowY:"hidden", display:"flex", justifyContent:"center"}}>
                <motion.div
                    initial={{ y: hovered ? "0%" : "-50%" }}
                    animate={{ y: hovered ? "-50%" : "0%" }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "95%", height:"200%" ,display:"flex", flexDirection:"column"}}
                >
                    <div style  = {{display:"flex",alignItems:"center",flex:"1"}}>
                        <div>
                            {firstText}
                        </div>
                    </div>
                    <div style = {{display:"flex",alignItems:"center",flex:"1"}}>
                        <div>
                            {secondText}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>   
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
      const isMobile = screenWidth < 768;
      return isMobile ? <>{children}</> : null;
    };

    const Tablet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const isTablet = screenWidth >= 768 && screenWidth < 992;
        return isTablet ? <>{children}</> : null;
      };
  
    const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const isNotMobile = screenWidth < 768;
      return isNotMobile ? <>{children}</> : null;
    };


    const projectLocation = [
        "/crocs",
        "/decentralizationOfEnergy",
        "/orthoCenter",
        "/chirpyChips",
        "/mithilaMakhana",
        "/cognitiveErgonomics",
        "/qissaUX",
        "/qissaUI",
        "/sniffAndSipp",
        "/letaSobierajski",
        "/bhaavi",
        "/lullabyLand",
    ];

    const firstText = [
        "Experience Redesigned",
        "Decentralization of Energy",
        "Ortho Centre",
        "Chirpy Chips",
        "Mithila Makhana",
        "Aksh",
        "Qissa",
        "Qissa Mobile App",
        "Sniff & Sipp",
        "Leta Sobierajski",
        "Bhaavi",
        "Lullaby Land",
    ];

    const secondText = [
        "Revamping the Jibbitz buying experience",
        "Systems Thinking | Retail Business Strategy",
        "Rebranding",
        "Branding",
        "Branding and Packaging",
        "UI/UX |Cognitive Ergonomics",
        "UX Research | Service Design",
        "UX Research | Service Design",
        "Branding",
        "Editorial Design",
        "Fixture Design for Momo vendors",
        "A kids furniture collection",
    ];


    const secondImage  = [
        '/projects/crocs/cards/image1.png',
        '/projects/decentralize/cards/image1.png',
        '/projects/orthoCenter/cards/image1.gif',
        '/projects/chirpy/cards/image1.png',
        '/projects/mithilaMakhana/cards/image1.png',
        '/projects/cognitiveErgonomics/cards/image1.png',
        '/projects/qissaUX/cards/image1.png',
        '/projects/qissaUI/cards/image1.png',
        '/projects/sniffAndSipp/cards/image1.png',
        '/projects/letaSobierajski/cards/image1.png',
        '/projects/bhaavi/cards/image1.png',
        '/projects/lullabyLand/cards/image1.png',
    ];

    const firstImage = [
        '/projects/crocs/cards/image2.png',
        '/projects/decentralize/cards/image2.png',
        '/projects/orthoCenter/cards/image2.png',
        '/projects/chirpy/cards/image2.png',
        '/projects/mithilaMakhana/cards/image2.png',
        '/projects/cognitiveErgonomics/cards/image2.png',
        '/projects/qissaUX/cards/image2.png',
        '/projects/qissaUI/cards/image2.png',
        '/projects/sniffAndSipp/cards/image2.png',
        '/projects/letaSobierajski/cards/image2.png',
        '/projects/bhaavi/cards/image2.png',
        '/projects/lullabyLand/cards/image2.png',
    ];



  return (
    <>
     <Desktop>        
        <div style = {{minHeight:"3000px",display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", backgroundColor:"black"}}>
            <div style = {{height:"2900px",width:"85vw", display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between"}}>
                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[0]} secondImg={secondImage[0]} projLoc={projectLocation[0]} firstText={firstText[0]} secondText={secondText[0]} scale="1" isVideo={false} />
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[1]} secondImg={secondImage[1]} projLoc={projectLocation[1]} firstText={firstText[1]} secondText={secondText[1]} scale="1" isVideo={false}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[2]} secondImg={secondImage[2]} projLoc={projectLocation[2]} firstText={firstText[2]} secondText={secondText[2]} scale="1" isVideo={true}/>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[3]} secondImg={secondImage[3]} projLoc={projectLocation[3]} firstText={firstText[3]} secondText={secondText[3]} scale="1" isVideo={false}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[4]} secondImg={secondImage[4]} projLoc={projectLocation[4]} firstText={firstText[4]} secondText={secondText[4]} scale="1" isVideo={false}/>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[5]} secondImg={secondImage[5]} projLoc={projectLocation[5]} firstText={firstText[5]} secondText={secondText[5]} scale="1" isVideo={false}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[6]} secondImg={secondImage[6]} projLoc={projectLocation[6]} firstText={firstText[6]} secondText={secondText[6]} scale="1" isVideo={false}/>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[7]} secondImg={secondImage[7]} projLoc={projectLocation[7]} firstText={firstText[7]} secondText={secondText[7]} scale="1" isVideo={false}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[8]} secondImg={secondImage[8]} projLoc={projectLocation[8]} firstText={firstText[8]} secondText={secondText[8]} scale="1" isVideo={false}/>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[9]} secondImg={secondImage[9]} projLoc={projectLocation[9]} firstText={firstText[9]} secondText={secondText[9]} scale="1" isVideo={false}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-around"}}>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[10]} secondImg={secondImage[10]} projLoc={projectLocation[10]} firstText={firstText[10]} secondText={secondText[10]} scale="1" isVideo={false}/>
                            <Card cardHeight='450px' cardWidth='450px' firstImg={firstImage[11]} secondImg={secondImage[11]} projLoc={projectLocation[11]} firstText={firstText[11]} secondText={secondText[11]} scale="1" isVideo={false}/>
                    </div>
            </div>
        </div>
    </Desktop>

    <Tablet>
         <div style = {{minHeight:"5900px",display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
            <div style = {{height:"5700px",display:"flex", flexDirection:"column",width:"100vw", alignItems:"center", justifyContent:"space-between"}}>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[0]} secondImg={secondImage[0]} projLoc={projectLocation[0]} firstText={firstText[0]} secondText={secondText[0]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[1]} secondImg={secondImage[1]} projLoc={projectLocation[1]} firstText={firstText[1]} secondText={secondText[1]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[2]} secondImg={secondImage[2]} projLoc={projectLocation[2]} firstText={firstText[2]} secondText={secondText[2]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[3]} secondImg={secondImage[3]} projLoc={projectLocation[3]} firstText={firstText[3]} secondText={secondText[3]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[4]} secondImg={secondImage[4]} projLoc={projectLocation[4]} firstText={firstText[4]} secondText={secondText[4]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[5]} secondImg={secondImage[5]} projLoc={projectLocation[5]} firstText={firstText[5]} secondText={secondText[5]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[6]} secondImg={secondImage[6]} projLoc={projectLocation[6]} firstText={firstText[6]} secondText={secondText[6]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[7]} secondImg={secondImage[7]} projLoc={projectLocation[7]} firstText={firstText[7]} secondText={secondText[7]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[8]} secondImg={secondImage[8]} projLoc={projectLocation[8]} firstText={firstText[8]} secondText={secondText[8]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[9]} secondImg={secondImage[9]} projLoc={projectLocation[9]} firstText={firstText[9]} secondText={secondText[9]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[10]} secondImg={secondImage[10]} projLoc={projectLocation[10]} firstText={firstText[10]} secondText={secondText[10]} scale="1" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[11]} secondImg={secondImage[11]} projLoc={projectLocation[11]} firstText={firstText[11]} secondText={secondText[11]} scale="1" isVideo={false}/>
            </div>
        </div>
    </Tablet>   

    <Mobile>
         <div style = {{minHeight:"5900px",display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
            <div style = {{height:"5700px",display:"flex", flexDirection:"column",width:"100vw", alignItems:"center", justifyContent:"space-between"}}>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[0]} secondImg={secondImage[0]} projLoc={projectLocation[0]} firstText={firstText[0]} secondText={secondText[0]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[1]} secondImg={secondImage[1]} projLoc={projectLocation[1]} firstText={firstText[1]} secondText={secondText[1]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[2]} secondImg={secondImage[2]} projLoc={projectLocation[2]} firstText={firstText[2]} secondText={secondText[2]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[3]} secondImg={secondImage[3]} projLoc={projectLocation[3]} firstText={firstText[3]} secondText={secondText[3]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[4]} secondImg={secondImage[4]} projLoc={projectLocation[4]} firstText={firstText[4]} secondText={secondText[4]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[5]} secondImg={secondImage[5]} projLoc={projectLocation[5]} firstText={firstText[5]} secondText={secondText[5]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[6]} secondImg={secondImage[6]} projLoc={projectLocation[6]} firstText={firstText[6]} secondText={secondText[6]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[7]} secondImg={secondImage[7]} projLoc={projectLocation[7]} firstText={firstText[7]} secondText={secondText[7]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[8]} secondImg={secondImage[8]} projLoc={projectLocation[8]} firstText={firstText[8]} secondText={secondText[8]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[9]} secondImg={secondImage[9]} projLoc={projectLocation[9]} firstText={firstText[9]} secondText={secondText[9]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[10]} secondImg={secondImage[10]} projLoc={projectLocation[10]} firstText={firstText[10]} secondText={secondText[10]} scale="0.8" isVideo={false}/>
                <Card cardHeight='450px' cardWidth='410px' firstImg={firstImage[11]} secondImg={secondImage[11]} projLoc={projectLocation[11]} firstText={firstText[11]} secondText={secondText[11]} scale="0.8" isVideo={false}/>
            </div>
        </div>
    </Mobile>   
    </>
  );
}

export default WorkContent;
