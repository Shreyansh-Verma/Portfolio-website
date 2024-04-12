// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Image from "next/image";
import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import Menu from "@/components/common/menu";
import { useRouter } from 'next/router';


const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  const router = useRouter();
  
  const handleButtonClick = () => {
    router.push('/#skills'); // Replace '/abc' with the route you want to navigate to
  };

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between section-container">
        <div style = {{alignSelf:"flex-start"}} className = "flex items-center justify-center">
            <TiArrowBack size={"2.5rem"} onClick = {handleButtonClick}/>
        </div>
        <div style = {{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
            <button
              className="hamburger w-6 h-6 flex items-center justify-center link relative"
              onClick={setmenuVisible.bind(null, !menuVisible)}
            >
              <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
            </button>
            <Menu setmenuVisible={setmenuVisible} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;