// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroSection from "@/components/home/hero";
import IntroPage from "@/components/home/introPage";
import CardsSpiral from "@/components/home/drop-down";
import ProjectsSection from "@/components/home/projects";
import QuoteSection from "@/components/home/quote";
import SkillsSection from "@/components/home/skills";
import NewSkills from "@/components/home/newSkills";
import CollaborationSection from "@/components/home/collaboration";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import Scripts from "@/components/common/scripts";
import AboutSection from "@/components/home/about";
import Loading from "@/components/home/load";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: NodeJS.Timeout = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";
      console.log("here is desktiop is changed = ",isDesktopResult)
      setisDesktop(isDesktopResult);
      console.log("desktop -= ",isDesktop);
      // setisDesktop(!isDesktop);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []); 

  return (

    <div style={{backgroundColor:"black", backgroundImage:`url(/backgroundImg.gif)`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",  backgroundAttachment:"fixed"}}>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <Header />
        <ProgressIndicator />
        <Cursor isDesktop={isDesktop} />
        {isLoading?(<><Loading/></>):
        <main className="flex-col flex">
          {renderBackdrop()}
          <HeroSection isDesktop = {isDesktop} />
          {/* <HeroSection /> */}
          <IntroPage isDesktop={isDesktop}/>
          <ProjectsSection isDesktop={isDesktop} />
          <CardsSpiral />
          {/* <AboutSection /> */}
          <NewSkills/>
          <QuoteSection />
          <SkillsSection />
          {/* <TimelineSection isDesktop={isDesktop} /> */}
          <CollaborationSection />
          <Footer />
        </main>}
        <Scripts />
      </Layout>
    </div>
  );
}
