'use client';

import { useRef } from "react";
import Image from "next/image";
import { certificatesData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type CertificateProps = (typeof certificatesData)[number];

export default function Certficate({ 
  title,
  description, 
  hastags, 
  imageUrl,
  certifLink,
}: CertificateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <motion.div 
    ref={ref}
    style={{ 
      scale: scaleProgress, 
      opacity: opacityProgress,
    }}
    className="group mb-3 sm:mb-8 last:mb-0">
      <section
      className='bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]'>
            <h3 
            className='text-2xl font-semibold'>{title}</h3>
            <p 
            className='mt-2 leading-relaxed text-gray-700 dark:text-white/90'>{description}</p>
            <ul 
              className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
              {hastags.map((hastags, index) => (
              <li 
              className='bg-black/[0.7] px-3.5 py-1.5 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90' key={index}>{hastags}
              </li>
            ))}
          </ul>
        </div>
        
        <a 
        href={certifLink} 
        target='_blank' 
        rel="noopener noreferrer">
        <Image 
          src={imageUrl} 
          alt='Certificate I earned' 
          quality={90} 
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2x1 cursor-pointer
          transition 
          group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2

          group-even:group-hover:transalte-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:-rotate-2
          
          group-even:right-[initial] 
          group-even:-left-40'/>
        </a>
      </section>
    </motion.div>
  );
}