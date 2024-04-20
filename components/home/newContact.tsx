import React from "react"
import { gsap, Linear } from "gsap";

const NewContact = () => {
    const bgImage = `url(/Union.png)`;


    React.useEffect(() => {
        gsap.to('#flyingAstro', {
                scrollTrigger: {
                    trigger: '#newDiv',
                    start: 'top-=20 top',
                    scrub: 1.9
                },
                x: "-100vw",
          y: "-35vh",
          rotate:"60",
            })
      },[])

    return(
        <>
            <div  id = "newDiv" style = {{position:"relative",minHeight:"100vh", minWidth:"100vw",backgroundImage:bgImage,backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",  backgroundAttachment:"fixed"}}>
                <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"80vw", marginTop:"45vh"}} src = "/astro.svg"></img>
            </div>
        </>
    )
}

export default NewContact;