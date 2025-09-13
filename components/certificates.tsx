'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { certificatesData } from '@/lib/data';
import Certificate from './certificate';
import { useSectionInView } from '@/lib/hooks';

export default function Certificates() {
  const { ref } = useSectionInView('Certificates');

  return (
    <section ref={ref} id='certificates' className='scroll-mt-28 mb-28'>
      <SectionHeading>My Certifications</SectionHeading>
      <div>
          {certificatesData.map((certificate, index) => (
            <React.Fragment key={index}>
              <Certificate {...certificate} />
            </React.Fragment>
          ))}
      </div>
    </section>
  )
}