import React from 'react';
import Typewriter from 'typewriter-effect';

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Namaste! Welcome to my portfolio')
                // .callFunction(() => {
                //     console.log('String typed out!');
                // })
                // .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //     console.log('All strings were deleted');
                // })
                .start();
            }}
            />
    </div>
  );
}

export default Loading;
