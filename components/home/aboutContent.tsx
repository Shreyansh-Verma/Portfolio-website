import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const Card = ({minHeight, minWidth}:{minHeight:string, minWidth:string}) => {
    return(
        <div style = {{minHeight:minHeight, minWidth:minWidth, backgroundColor:"white", borderRadius:"2%", margin:"0.3rem"}}>

        </div>
    )
}


const AboutContent = ({sectionHeading, sectionContent}:{sectionHeading:string, sectionContent:string}) => {
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
            <div style = {{display:"flex", minHeight:"100vh", flexDirection:"column", backgroundColor:"black"}}>
                <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center"}}>
                    <div id = "heading" style = {{display:"flex"}}>
                        <div className = "text-4xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
                            <div style = {{marginLeft:"8%"}} id = "title" >
                                {sectionHeading.split('').map((char, index) => (
                                    <motion.span
                                        key={index}
                                        style={{ display: "inline-block"}}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        <div id = "description" className = "text-2xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"center", alignItems:"center"}}>
                            <motion.div 
                                initial={{ opacity: 0,  x:500}}
                                whileInView={{ opacity: 1,  x: 0 }}
                                transition={{duration:1.1}}
                                style = {{width:"80%"}}>
                                {sectionContent}
                            </motion.div>
                        </div>
                    </div>
                </div>
                
                <div id = "cardSection" style = {{display:"flex", flexWrap:"wrap", width:"100vw", justifyContent:"space-around"}}>
                    {[...Array(3)].map((x, i) =>
                        <Card minHeight="30vh" minWidth="25vw" key={i} />
                        )}
                </div>
            </div>
        </Desktop>
        <Tablet>
            <div style = {{backgroundColor:"black", display:"flex", minHeight:"100vh", flexDirection:"column"}}>
                    <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center"}}>
                        <div id = "heading" style = {{display:"flex"}}>
                            <div className = "text-4xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"flex-start", alignItems:"center"}} >
                                <div style = {{marginLeft:"8%"}} id = "title" >
                                    {sectionHeading.split('').map((char, index) => (
                                        <motion.span
                                            key={index}
                                            style={{ display: "inline-block" }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            <div id = "description" className = "text-2xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"center", alignItems:"center"}}>
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
                    
                    <div id = "cardSection" style = {{display:"flex", flexDirection:"column", flexWrap:"wrap", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{width : "80vw"}}>
                        {[...Array(3)].map((x, i) =>
                            <Card minHeight="20vh" minWidth="10vw" key={i} />
                            )}
                        </div>
                    </div>
            </div>
        </Tablet>
        <Mobile>
        <div style = {{backgroundColor:"black", display:"flex",flexDirection:"column", minHeight:"100vh"}}>
                    <div id = "headingSection" style = {{display:"flex",minHeight:"40vh", alignItems:"center"}}>
                        <div id = "heading" style = {{display:"flex", flexDirection:"column"}}>
                            <div className = "text-3xl" style = {{fontFamily:"Helios Pro",flex:"1",display:"flex", justifyContent:"center", alignItems:"center"}} >
                                <div style = {{marginLeft:"8%"}} id = "title" >
                                    {sectionHeading.split('').map((char, index) => (
                                        <motion.span
                                            key={index}
                                            style={{ display: "inline-block" }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            <div id = "description" className = "text-1xl" style  = {{display:"flex",flex:"1", fontFamily:"Gotham", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
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
                    
                    <div id = "cardSection" style = {{display:"flex", flexDirection:"column", flexWrap:"wrap", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{width : "80vw"}}>
                        {[...Array(3)].map((x, i) =>
                            <Card minHeight="20vh" minWidth="10vw" key={i} />
                            )}
                        </div>
                    </div>
            </div>               
        </Mobile>
        </>
    );
}
export default AboutContent;