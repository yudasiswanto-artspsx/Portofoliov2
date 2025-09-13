'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '@/public/pic.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { FaGoogleDrive, FaArrowRight, FaLinkedin, } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section 
    ref={ref}
    id='home' 
    className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{ y: 0, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ 
              type: 'tween', 
              duration: 0.2,}}>
          <Image 
            src={profilePic}
            alt="pic yuda siswanto"
            width={250} 
            height={250} 
            quality={90} 
            priority={true}
            className="h-50 w-50 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
        </div>
      </div>

      <motion.h1 className='mb-10 mt-4 px-6 text-2x1 font-medium !leading-[1.5] sm:text-4xl'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold'>Hi!, i'm Yuda Siswanto.</span> I'm an{" "}
        <span className="font-bold">Individual Consultant, Surveyor, and GIS Engineer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        learn <span className="">something new</span>. Committed to delivering the best results and completing tasks on time.{" "}
        <span className="underline"></span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-3 text-lg font-medium'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      >
        <Link href='#contact' 
        className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}
        >
        Contact me here{" "}
        <FaArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/50' href='https://drive.google.com/file/d/13kIpVzwIxB5Xbz-EyfL7un8o17_EF-sS/view?usp=sharing' target='blank' rel='noopener noreferrer' download
        >Download CV
        <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
        </a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.30rem] rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/50 dark:text-white/60' href='https://www.linkedin.com/in/yudasiswanto84/' target='_blank'>
          <FaLinkedin />
        </a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/50 dark:text-white/60' href='https://drive.google.com/drive/folders/1Ialg26CRsM85J8w_n4KbsxtUyJLpw3VG' target='_blank'>
          <FaGoogleDrive />
        </a>
      </motion.div>
    </section>
  );
}