import { gsap, Linear } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import React, { useEffect, useRef } from "react";
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import { forwardRef , ReactNode} from 'react';
import { useRouter } from 'next/router';

// Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const MediaCard = forwardRef(({ imageLocation, imageTitle }: {imageLocation: string, imageTitle:string}) => {

//   return (
//       <Card sx={{minWidth: 250, maxWidth: 345, minHeight: 300, margin: "1%", borderColor: "black" }}>
//         <CardMedia
//           sx={{ height: 140 }}
//           image={imageLocation}
//           title={imageTitle}
//         />
//         <CardContent>
//           {/* <Typography gutterBottom variant="h5" component="div">
//             Project
//           </Typography> */}
//           <Typography variant="body2" color="text.secondary">
//             <div style = {{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
//               Fitness
//             </div>
//           </Typography>
//         </CardContent>
//         {/* <CardActions> */}
//           {/* <div style ={{display:"flex", justifyContent:"center", alignItems:"center"}}>
//           <Button size="small">Learn More</Button>
//           </div> */}
//         {/* </CardActions> */}
//       </Card>
//   );
// });

// MediaCard.displayName = "MediaCard";


const Card = (({cardImage, cardContent} : {cardImage:string, cardContent:string}) =>{
    return(
      <div style  = {{display:"flex", minHeight:"30vh", minWidth:"15vw", borderRadius:"2%", backgroundImage: `url(${cardImage})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <div style = {{alignSelf:"flex-end", backgroundColor:"rgba(0,0,0,0.75)", minHeight:"10vh", display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
              <p>{cardContent}</p>
          </div>
      </div>
    )
});


const CardsSpiral = () => {
  // Refs for left and right sections
  const leftCardsRefs = useRef(new Array (4));
  const rightCardsRefs = useRef(new Array (4));
  const midCardRef = useRef(null);
  const router = useRouter();
  const firstText = useRef(null);
  const secondText = useRef(null);

  const handleButtonClick = () => {
    router.push('/externalTest'); // Replace '/abc' with the route you want to navigate to
  };


  let xPercent = 0;


  useEffect( () => {

    gsap.set(secondText.current, {xPercent: 102})
  
    requestAnimationFrame(animate);
  
  }, [])
  
  let xPercentOne = 0;

  let xPercentTwo = 102;
  
  const animate = () => {

  
    if(xPercent < -102){
  
      // xPercent = -10;
      xPercent  = 0;
      if (xPercentOne < -102)
        {
          xPercentOne = 102;
        }
        else
        {
          xPercentTwo = 102;
        }
      // xPercentOne = -100;
      // xPercentTwo = -100;
  
    }

    // console.log("x percent = ",xPercent);
  
    gsap.set(firstText.current, {xPercent: xPercentOne})
  
    gsap.set(secondText.current, {xPercent: xPercentTwo})
  
    requestAnimationFrame(animate);
  
    xPercent -= 0.1;
    xPercentOne -= 0.1;
    xPercentTwo -= 0.1
  
  }

  

  useEffect(()=>{

    for(let i = 0;i<3;i++)
    {
      if(i%1)
      {

      gsap.fromTo(
      
        leftCardsRefs.current[i],
        { yPercent: 0 },
        {
          yPercent: -100,
          scrollTrigger: {
            trigger: leftCardsRefs.current[i],
            start: "top bottom-=200", // Adjust start position as needed
            end: "bottom top",
            scrub: true
          }
        }
      );
      }
      else
      {
        gsap.fromTo(
      
          leftCardsRefs.current[i],
          { yPercent: 0 },
          {
            yPercent: -100,
            scrollTrigger: {
              trigger: leftCardsRefs.current[i],
              start: "top bottom-=200", // Adjust start position as needed
              end: "bottom top",
              scrub: 3
            }
          }
        );
      }
    }
    
    for(let i = 0;i<3;i++)
    {
      if(i%1)
      {

      gsap.fromTo(
      
        rightCardsRefs.current[i],
        { yPercent: 0 },
        {
          yPercent: -100,
          scrollTrigger: {
            trigger: rightCardsRefs.current[i],
            start: "top bottom-=200", // Adjust start position as needed
            end: "bottom top",
            scrub: true
          }
        }
      );
      }
      else
      {
        gsap.fromTo(
      
          rightCardsRefs.current[i],
          { yPercent: 0 },
          {
            yPercent: -100,
            scrollTrigger: {
              trigger: rightCardsRefs.current[i],
              start: "top bottom-=200", // Adjust start position as needed
              end: "bottom top",
              scrub: 3
            }
          }
        );
      }
    }

    gsap.to(
      
      midCardRef.current,
      {
        // yPercent: -100,
        scrollTrigger: {
          trigger: midCardRef.current,
          start: "top top+=5%", // Adjust start position as needed
          end: "+=50%",
          pin: true,
          // scrub: 3
        }
      }
    );

  },[])


  useEffect(() => {
    gsap.to('#ufo', {
			scrollTrigger: {
				trigger: '#scrollSection',
				start: 'top top',
				scrub: 1.9
			},
			x: "100vw",
      y: "120vh",
		})
  },[])




  //   // GSAP animations for right section cards
  //   rightCardsRefs.current.forEach((cardRef, index) => {
  //     gsap.fromTo(
  //       cardRef,
  //       { yPercent: 0 },
  //       {
  //         yPercent: -100,
  //         scrollTrigger: {
  //           trigger: cardRef,
  //           start: "top bottom-=200", // Adjust start position as needed
  //           end: "bottom top",
  //           scrub: true
  //         }
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div style={{ display: "flex", minHeight: "130vh" , flexDirection:"column" }} id="scrollSection">
      <div className = "text-4xl seq font-bold" style = {{position:"relative", fontFamily:"Gotham",display:"flex", flexDirection:"column", marginTop:"5%", justifyContent:"flex-start", alignItems:"center",height:"30vh", width:"100vw"}}>
        <img id = "ufo" style={{left:"-10%",top:"-50%",position:"absolute", height:"60vh", width:"50vw"}} src = "/ufo.svg"></img>
        <div>
          My design ethos centers around <span style = {{color:"#102A71"}}> user-centric </span> solutions
        </div>
        <div>
          and  <span style = {{color:"#102A71"}}> cross disciplinary </span> collaboration.
        </div>
      </div>
      <div>
        
      </div>
      <div style={{display:"flex", paddingLeft:"10%", paddingRight:"10%", marginTop:"5%"}}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "26vw" }} id="leftSection">
          <div ref = {(el)=> leftCardsRefs.current[0] = el} style = {{margin: "2%", alignSelf:"flex-start"}}>
            <Card cardImage  = "/rajasthan.png" cardContent="imge"/>
          </div>
          <div ref = {(el)=> leftCardsRefs.current[1] = el} style  = {{margin: "2%", alignSelf:"flex-end"}}>
            <Card cardImage  = "/speech.png" cardContent="imge"/>
          </div>
          <div ref = {(el)=> leftCardsRefs.current[2] = el} style = {{margin:"2%", alignSelf : "flex-start"}}>
            <Card cardImage  = "/dogs.png" cardContent="imge"/>
          </div>
          {/* <div ref = {(el)=> leftCardsRefs.current[3] = el} style = {{margin: "2%", alignSelf : "flex-end"}}>
            <Card cardImage  = "/projects/akgec.jpg" cardContent="imge"/>
          </div> */}
        </div>

        <div style={{display: "flex", minHeight: "100vh", width: "48vw" }} id="midSection">
          <div ref = {(el)=> midCardRef.current = el}  style = {{width:"100%", justifyItems:"center", alignSelf:"flex-start"}}>
            <div style = {{ display:"flex", flexDirection:"column", justifyContent:"space-between", borderRadius:"5%", alignItems:"center", minHeight:"70vh"}}>
              <div className = "text-bold text-2xl" id="section-1" style = {{fontFamily:"Gotham", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <div>
                    I enjoy Turning 
                  </div>
                    Stories into Realities
                  <div>
                  </div>
              </div>

              <div id="section-2" className="text-bold text-6xl" style = {{fontFamily:"Helios Pro", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <div>
                  My
                </div>

                <div>
                  Playground
                </div>
              </div>

              <div id="section-3" className = "text-bold text-2xl" style = {{fontFamily:"Gotham",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div>
                  I enjoy Turning
                </div>

                <div>
                  Stories into Realities
                </div>
              </div>
              <div id="section-4" style = {{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div>
                <button onClick = {handleButtonClick} className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                  Know More
                </button>
                </div>
              </div>
                {/* <p style = {{minHeight:"80vh",fontSize: "30px", color:"black", borderRadius:"5%"}}>Some text</p> */}

            </div>
          </div>
        </div>

        <div style={{  display: "flex", flexDirection: "column", minHeight: "100vh", width: "26vw"}} id="rightSection">
        <div ref = {(el)=> rightCardsRefs.current[0] = el} style = {{alignSelf:"flex-end"}}>
            <Card cardImage  = "/fitness.png" cardContent="imge"/>
          </div>
          <div ref = {(el)=> rightCardsRefs.current[1] = el} style = {{margin:"2%",alignSelf:"flex-start"}}>
            <Card cardImage  = "/streetPhoto.png" cardContent="imge"/>
          </div>
          <div ref = {(el)=> rightCardsRefs.current[2] = el} style = {{margin:"2%", alignSelf : "flex-end"}}>
            <Card cardImage  = "/fitness.png" cardContent="imge"/>
          </div>
          {/* <div ref = {(el)=> rightCardsRefs.current[3] = el} style = {{margin:"2%", alignSelf : "flex-start"}}>
            <Card imageLocation  = "/projects/akgec.jpg" imageTitle="imge"/>
          </div> */}
        </div>
      </div>

      <div style = {{marginTop:"15%",fontStyle:"gotham",position:"relative", display:"flex", alignItems:"center", border:"1px solid", borderStyle:"solid none", flex :"0.1", minWidth :"100vw", backgroundColor:"black", whiteSpace:"nowrap", minHeight:"5vh" }} id = "stripe">
        <span ref={firstText} id = "stripe1" style = {{position:"absolute",display:"flex", justifyContent:"space-between", width:"100vw"}}>
            {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p>             */}
            <p style = {{}}>Visual Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>User Experience</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Service Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Retail</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Systems Thinking</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p style = {{}}>Visual Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>User Experience</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
        </span>
        <span ref={secondText} id = "stripe2" style = {{position:"absolute",display:"flex", justifyContent:"space-between", minWidth:"100vw"}}>
            <p ref={null}>Service Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Retail</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Systems Thinking</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Visual Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>User Experience</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Service Design</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            <p ref={null}>Retail</p>
            <p><img style = {{maxHeight:"3vh"}}src = "/star.svg"></img></p>
            {/* <p ref={null} style = {{opacity:"0"}}>Systems Thi</p> */}

        </span>

      </div>
    </div>
  );
};

export default CardsSpiral;