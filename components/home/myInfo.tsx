import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const MyInfo = ({sectionContent}:{sectionContent:string}) => {

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
        <div>
        <Desktop>
            <div style = {{backgroundColor:"black", display:"flex", minHeight:"100vh"}}>
                <div style = {{minHeight:"80vh", border: "2px solid white", borderRadius:"2%", flex:"1"}} id = "gifImage">
                    
                </div>
                <div style = {{flex:"1", display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <motion.div
                    initial={{ opacity: 0,  }}
                    whileInView={{ opacity: 1}}
                    transition={{ease:"linear", duration:0.5}} 
                    className = "text-2xl" id = "myInfo" style = {{fontFamily:"Gotham", width:"20vw"}}>
                        <p>{sectionContent}</p>
                    </motion.div>
                </div>
            </div>
        </Desktop>
        <Tablet>
            <div style = {{backgroundColor:"black", display:"flex", flexDirection:"column", minHeight:"100vh"}}>
                <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style = {{height:"60vh", border: "2px solid white", borderRadius:"2%", flex:"1", width:"60vw"}} id = "gifImage">
                </div>
                </div>
                <div style = {{flex:"1", display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <motion.div
                    initial={{ opacity: 0,  }}
                    whileInView={{ opacity: 1}}
                    transition={{ease:"linear", duration:0.5}} 
                    className = "text-3xl" id = "myInfo" style = {{fontFamily:"Gotham", width:"80vw"}}>
                        <p>{sectionContent}</p>
                    </motion.div>
                </div>
            </div>
        </Tablet>
        <Mobile>
        <div style = {{backgroundColor:"black", display:"flex", flexDirection:"column", minHeight:"100vh"}}>
                <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div style = {{height:"60vh", border: "2px solid white", borderRadius:"2%", flex:"1", width:"60vw"}} id = "gifImage">
                </div>
                </div>
                <div style = {{flex:"1", display:"flex",justifyContent:"center", alignItems:"center", marginTop:"8%"}}>
                    <motion.div
                    initial={{ opacity: 0,  }}
                    whileInView={{ opacity: 1}}
                    transition={{ease:"linear", duration:0.5}} 
                    className = "text-2xl" id = "myInfo" style = {{fontFamily:"Gotham", width:"80vw"}}>
                        <p>{sectionContent}</p>
                    </motion.div>
                </div>
            </div>
        </Mobile>
        </div>
    );
}
export default MyInfo;