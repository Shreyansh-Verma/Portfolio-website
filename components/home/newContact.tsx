import React from "react"
import { gsap, Linear } from "gsap";

const NewContact = () => {
    const bgImage = `/Union.png`;

    const [screenWidth, setScreenWidth] = React.useState(0);

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


    React.useEffect(() => {


    let mn = gsap.matchMedia();

    mn.add("(min-width: 992px)", () => {
        gsap.to('#flyingAstro', {
            scrollTrigger: {
                trigger: '#newDiv',
                start: 'top top',
                scrub: 1.9
            },
            x: "-80vw",
      y: "-25vh",
      rotate:"190",
        })
    })

    mn.add("((min-width: 768px) and (max-width: 991px))", () => {

        gsap.to('#flyingAstro', {
            scrollTrigger: {
                trigger: '#newDiv',
                start: 'top top',
                scrub: 1.9
            },
            x: "-80vw",
      y: "-25vh",
      rotate:"190",
        })
 
    })



        // gsap.to('#flyingAstro', {
        //         scrollTrigger: {
        //             trigger: '#newDiv',
        //             start: 'top-=60%top top',
        //             scrub: 1.9
        //         },
        //         x: "-80vw",
        //   y: "-25vh",
        //   rotate:"190",
        //     })
      },[])

    return(
        <>
        <Desktop>
            <div  id = "newDiv" style = {{position:"relative"}}>
                <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"80vw", marginTop:"25vh", scale:"1.5"}} src = "/astro.svg"></img>
                <img style = {{height:"100%",width:"100%"}} src = {bgImage}></img>
            </div>
        </Desktop>
        <Tablet>
            <div id = "newDiv" style = {{position:"relative"}}>
                <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"50vw", marginTop:"5vh", scale:"0.5"}} src = "/astro.svg"></img>
                <img style = {{height:"100%",width:"100%"}} src = {bgImage}></img>
            </div>
        </Tablet>
        <Mobile>
            <div  id = "newDiv" style = {{position:"relative"}}>
                <img id = "flyingAstro" style = {{position:"absolute", marginLeft:"10vw", marginTop:"-10vh", scale:"0.4"}} src = "/astro.svg"></img>
                <img style = {{height:"100%",width:"100%"}} src = {bgImage}></img>
            </div>
        </Mobile>
        </>
    )
}

export default NewContact;