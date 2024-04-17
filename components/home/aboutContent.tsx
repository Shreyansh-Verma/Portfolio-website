import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const Card = ({minHeight, minWidth, imgLoc}:{minHeight:string, minWidth:string, imgLoc:string}) => {
    return(
        <div style = {{minHeight:minHeight, minWidth:minWidth, borderRadius:"2%", margin:"0.3rem",backgroundImage: imgLoc , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

        </div>
    )
}

const RetCard = ({numCards, imageArr}:{numCards:number, imageArr:Array<string>})=>{

    if(numCards==6)
    {
        return(
            <div style = {{display:"flex", alignItems:"center"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"95vw"}}>
                    <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                    </div>
                    <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[3]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[4]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[5]}/>
                    </div>
            </div>
            </div>
        )
    }
    else if (numCards == 9)
    {
        return(
            <div style = {{display:"flex", justifyContent:"center", alignItems:"center",width:"100vw"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"95vw"}}>
                    <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                    </div>
                    <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[3]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[4]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[5]}/>
                    </div>
                    <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[6]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[7]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[8]}/>
                    </div>
                </div>
            </div>
        )
    }
    else if (numCards == 3)
    {
        return(
            <div style = {{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw"}}>
                <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", width:"95vw", justifyContent:"space-between"}}>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                </div>
            </div>
        )
    }
    else
    {
        return null;
    }
}


const RetTablet = ({numCards, imageArr}:{numCards:number, imageArr:Array<string>})=>{

    if(numCards==6)
    {
        return(
            <div style = {{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style = {{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"95vw"}}>
                    <div id = "cardSection" style = {{display:"flex", flexDirection:"column",flexWrap:"wrap", justifyContent:"space-around"}}>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[3]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[4]}/>
                        <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[5]}/>
                    </div>
                </div>
            </div>
        )
    }
    else if (numCards == 9)
    {
        return(
            <div style = {{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",width:"100vw"}}>
                <div id = "cardSection" style = {{display:"flex", flexDirection:"column", flexWrap:"wrap", width:"95vw", justifyContent:"space-around"}}>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[3]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[4]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[5]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[6]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[7]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[8]}/>
                </div>
        </div>
        )
    }
    else if (numCards == 3)
    {
        return(
            <div style = {{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw"}}>
                <div id = "cardSection" style = {{display:"flex", flexDirection:"column", flexWrap:"wrap", width:"95vw", justifyContent:"space-around"}}>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[0]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[1]}/>
                    <Card minHeight="45vh" minWidth="28vw" imgLoc = {imageArr[2]}/>
                </div>
            </div>
        )
    }
    else
    {
        return null;
    }
}


const AboutContent = ({sectionHeading, sectionContent, numCards, imageArr}:{sectionHeading:string, sectionContent:string, numCards:number, imageArr: Array<string>}) => {
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
    return(
        <>
        <Desktop>
            <div style = {{display:"flex", minHeight: numCards==null?"20vh":"100vh", flexDirection:"column", backgroundColor:"black", alignItems:"center"}}>
                <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center", width:"95vw"}}>
                    <div id = "heading" style = {{display:"flex"}}>
                        <div className = "text-4xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
                        <div style={{}} id="title">
                                {sectionHeading.split(' ').map((word, wordIndex, wordsArray) => (
                                <span key={wordIndex}>
                                    {word.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        style={{ display: "inline-block" }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (wordIndex * 0.05) + (charIndex * 0.05) }}
                                    >
                                        {char}
                                    </motion.span>
                                    ))}
                                    {wordIndex !== wordsArray.length - 1 && <span>&nbsp;</span>}
                                </span>
                                ))}
                            </div>
                        </div>
                        <div id = "description" className = "text-2xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"flex-end", alignItems:"center"}}>
                            <motion.div 
                                initial={{ opacity: 0,  x:300}}
                                whileInView={{ opacity: 1,  x: 0 }}
                                transition={{duration:1.1}}
                                style = {{width:"80%"}}>
                                {sectionContent}
                            </motion.div>
                        </div>
                    </div>
                </div>
                <RetCard numCards={numCards} imageArr={imageArr} />
            </div>
        </Desktop>
        <Tablet>
            <div style = {{backgroundColor:"black", display:"flex", minHeight: numCards==null?"20vh":"100vh", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                    <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center", width:"95vw"}}>
                        <div id = "heading" style = {{display:"flex"}}>
                            <div className = "text-4xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
                            <div style={{}} id="title">
                                {sectionHeading.split(' ').map((word, wordIndex, wordsArray) => (
                                <span key={wordIndex}>
                                    {word.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        style={{ display: "inline-block" }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (wordIndex * 0.05) + (charIndex * 0.05) }}
                                    >
                                        {char}
                                    </motion.span>
                                    ))}
                                    {wordIndex !== wordsArray.length - 1 && <span>&nbsp;</span>}
                                </span>
                                ))}
                            </div>
                            </div>
                            <div id = "description" className = "text-2xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"flex-end", alignItems:"center"}}>
                                <motion.div 
                                    initial={{ opacity: 0,  x:300}}
                                    whileInView={{ opacity: 1,  x: 0 }}
                                    transition={{duration:1.1}}
                                    style = {{width:"80%"}}>
                                    {sectionContent}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                <RetTablet numCards={numCards} imageArr={imageArr} />
            </div>
        </Tablet>
        <Mobile>
        <div style = {{backgroundColor:"black", display:"flex", minHeight: numCards==null?"20vh":"100vh", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                    <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center", width:"95vw"}}>
                        <div id = "heading" style = {{display:"flex"}}>
                            <div className = "text-2xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
                            <div style={{}} id="title">
                                {sectionHeading.split(' ').map((word, wordIndex, wordsArray) => (
                                <span key={wordIndex}>
                                    {word.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        style={{ display: "inline-block" }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (wordIndex * 0.05) + (charIndex * 0.05) }}
                                    >
                                        {char}
                                    </motion.span>
                                    ))}
                                    {wordIndex !== wordsArray.length - 1 && <span>&nbsp;</span>}
                                </span>
                                ))}
                            </div>
                            </div>
                            <div id = "description" className = "text-1xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"flex-end", alignItems:"center"}}>
                                <motion.div 
                                    initial={{ opacity: 0,  x:100}}
                                    whileInView={{ opacity: 1,  x: 0 }}
                                    transition={{duration:1.1}}
                                    style = {{width:"80%"}}>
                                    {sectionContent}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                <RetTablet numCards={numCards} imageArr={imageArr} />
            </div>                         
        </Mobile>
        </>
    );
}
export default AboutContent;