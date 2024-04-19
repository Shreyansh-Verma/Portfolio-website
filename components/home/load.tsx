import React from 'react';
import Typewriter from 'typewriter-effect';

function Loading() {

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

  const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDesktop = screenWidth >= 768;
    return isDesktop ? <>{children}</> : null;
  };

  const Mobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = screenWidth < 768;
    console.log("isMobile = ",isMobile)
    return isMobile ? <>{children}</> : null;
  };

  const Default: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isNotMobile = screenWidth >= 768;
    return isNotMobile ? <>{children}</> : null;
  };


  return (
    <>
    <Desktop>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0);
            }
            to {
              transform: rotate(359deg);
            }
          }

          @keyframes spin3D {
            from {
              transform: rotate3d(.5,.5,.5, 360deg);
            }
            to {
              transform: rotate3d(0deg);
            }
          }
        `}
      </style>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="solar-system">
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '400px', height: '400px', WebkitAnimation: 'spin 12s linear 0s infinite' }} className="earth-orbit orbit">
          <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'blue' }} className="planet earth"></div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '280px', height: '280px', WebkitAnimation: 'spin 7.4s linear 0s infinite' }} className="venus-orbit orbit">
            <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#928590' }} className="planet venus"></div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '150px', height: '150px', WebkitAnimation: 'spin 3s linear 0s infinite' }} className="mercury-orbit orbit">
              <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red' }} className="planet mercury"></div>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FDB813' }} className="sun"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Desktop>
  <Mobile>
  <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0);
            }
            to {
              transform: rotate(359deg);
            }
          }

          @keyframes spin3D {
            from {
              transform: rotate3d(.5,.5,.5, 360deg);
            }
            to {
              transform: rotate3d(0deg);
            }
          }
        `}
      </style>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="solar-system">
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '300px', height: '300px', WebkitAnimation: 'spin 12s linear 0s infinite' }} className="earth-orbit orbit">
          <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'blue' }} className="planet earth"></div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '180px', height: '180px', WebkitAnimation: 'spin 7.4s linear 0s infinite' }} className="venus-orbit orbit">
            <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#928590' }} className="planet venus"></div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fafbfC', borderRadius: '50%', width: '100px', height: '100px', WebkitAnimation: 'spin 3s linear 0s infinite' }} className="mercury-orbit orbit">
              <div style={{ position: 'absolute', top: '-5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'red' }} className="planet mercury"></div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FDB813' }} className="sun"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Mobile>
  </>
  );
}

export default Loading;
