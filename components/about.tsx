"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  
  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Experienced as an Individual Consultant, Surveyor{" "}
        <span className='font-medium'>and GIS Engineer</span>, with a proven work history in Mapping and Data Collection Survey consulting companies,{" "}
        <span className='font-medium'>Skilled in Geographic Information Systems (GIS), GPS Geodetic (GNSS)</span>,{" "}
        <span className=''>Microsoft Excel, AutoCAD Map 3D, Basic Programming language;</span> MySQL, Python, and Basic Web Programming using HTML, CSS, & Next.Js. <span className='underline'></span> Join training related to Big Data Cloud and Artificial Intelligence.{" "}
        <span className='font-medium'>
        </span> Committed to completing successful projects on time and always providing the best results.{" "}
        <span className='font-medium'> </span> 
      </p>

      <p>
        <span className='italic'>While I was on a work break</span>, I enjoy playing video games, workout, and playing with my
        cat. I also enjoy <span className='font-medium'>learning new things</span>. {" "}
        <span className='font-medium'> </span> 
      </p>
    </motion.section>
  )
}
