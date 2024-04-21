// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Image from "next/image";
import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import Menu from "@/components/common/menuAbout";
import { useRouter } from 'next/router';
import {motion} from "framer-motion"


const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  const router = useRouter();
  
  const handleButtonClick = () => {
    router.push('/works'); // Replace '/abc' with the route you want to navigate to
  };

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div style = {{display:"flex", justifyContent:"center"}}>
        <div style = {{width:"95vw"}} className="flex justify-between">
          <motion.div 
            whileTap={{ scale: 0.7 }}
            whileHover={{scale: 1.5}}
          style = {{alignSelf:"flex-start", cursor:"pointer"}} className = "flex items-center justify-center">
              <TiArrowBack size={"2.5rem"} onClick = {handleButtonClick}/>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
