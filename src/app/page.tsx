"use client"
import React from 'react';
import { HeroSection, Newsletter,  } from '@/components/landing';
import OpportunitiesSpotlight from '@/components/landing/OpportunitiesSpotlight';
import Resources from '@/components/landing/Resources';
import Section2 from '@/components/landing/AboutUs';
import Satisfied from '@/components/landing/Satisfied';
import Talent from '@/components/landing/Talent';
import Section3 from '@/components/landing/WhatWeDo';
import Testimonial from '@/components/landing/Testimonial';
function HomePage() {
  return (
    <div className='flex flex-col gap-[40px]'>
      <HeroSection />
      <Section2 />
      <Satisfied />
      <Talent />
      <Section3 />
      <Testimonial />
      <OpportunitiesSpotlight />

      {/* <AboutUs /> */}
      {/* <Achievements />
      <Package /> */}

      {/* <Services /> */}
      <Resources />
      <Newsletter />
    </div>
  );
}

export default HomePage;
