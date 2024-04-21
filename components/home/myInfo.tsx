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
            <div style = {{backgroundColor:"black", display:"flex",justifyContent:"center", alignItems:"center", minHeight:"90vh", width:"100vw"}}>
                <div style = {{display:"flex", justifyContent:"center",alignItems:"center", width:"95vw"}}>
                    <div style = {{display :"flex", justifyContent:"flex-start", alignItems:"flex-start",minHeight:"60vh", borderRadius:"2%", flex:"1"}} id = "gifImage">
                        <div style = {{borderRadius : "1%", minWidth:"40vw", minHeight:"80vh", backgroundImage: `url(/aboutSection/aboutMain.gif)` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}></div>
                    </div>
                    <div style = {{flex:"1", display:"flex",justifyContent:"center",  alignItems:"center",minHeight:"80vh"}}>
                        <motion.div
                        initial={{ opacity: 0,  }}
                        whileInView={{ opacity: 1}}
                        transition={{ease:"linear", duration:0.5}} 
                        className = "text-2xl" id = "myInfo" style = {{fontFamily:"Gotham",  width:"25vw"}}>
                            <p>{sectionContent}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Desktop>
        <Tablet>
            <div style = {{backgroundColor:"black", display:"flex",justifyContent:"center", alignItems:"center"}}>
                <div style = {{display:"flex",  flexDirection:"column", minHeight:"100vh", width:"95vw"}}>
                    <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{display:"flex", justifyContent:"center",alignItems:"center",height:"60vh", borderRadius:"2%", flex:"1", width:"60vw"}} id = "gifImage">
                            <div style = {{borderRadius : "1%", minWidth:"60vw", minHeight:"50vh", backgroundImage: `url(/aboutSection/aboutMain.gif)` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}></div>
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
            </div>
        </Tablet>
        <Mobile>
            <div style = {{backgroundColor:"black", display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
                <div style = {{display:"flex", flexDirection:"column", minHeight:"100vh", width:"95vw"}}>
                    <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style = {{display:"flex", justifyContent:"center",alignItems:"center",height:"60vh", borderRadius:"2%", flex:"1", width:"70vw"}} id = "gifImage">
                            <div style = {{borderRadius : "1%", minWidth:"95vw", minHeight:"50vh", backgroundImage: `url(/aboutSection/aboutMain.gif)` , backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}></div>
                        </div>
                    </div>
                    <div style = {{flex:"1", display:"flex",justifyContent:"center", alignItems:"center", marginTop:"8%", textAlign:"center"}}>
                        <motion.div
                        initial={{ opacity: 0,  }}
                        whileInView={{ opacity: 1}}
                        transition={{ease:"linear", duration:0.5}} 
                        className = "text-2xl" id = "myInfo" style = {{fontFamily:"Gotham", width:"80vw"}}>
                            <p>{sectionContent}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Mobile>
        </div>
    );
}
export default MyInfo;