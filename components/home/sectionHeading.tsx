import {motion} from "framer-motion";

const SectionHeading = ({sectionContent}:{sectionContent:string}) => {
    return(
        <motion.div
         
         style = {{backgroundColor:"black"}}>
            <motion.div
                initial={{ opacity: 0,  x:-500}}
                whileInView={{ opacity: 1,  x: 0 }}
                transition={{duration:1}}
             className = "text-2xl" style = {{textAlign:"center",marginLeft:"20%", marginRight:"20%",fontFamily:"Helios Pro",minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <p>{sectionContent}</p>
            </motion.div>
        </motion.div>
    );
}
export default SectionHeading;