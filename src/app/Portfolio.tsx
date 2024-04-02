import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

const projects = [
  { href: '/projects/ditoname', name: 'Ditoname' },
  { href: '/projects/tbsph', name: 'True blue' },
  { href: '/projects/vfr-planner', name: 'VFR planner' },
];

const Portfolio = () => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl text-center lg:max-w-6xl">
        <SectionTitle title={'See some of our case studies'} />
        <SectionHeader header={'Our Latest Work'} />
        <div className="my-10 grid grid-cols-1 justify-center gap-14 lg:mt-14 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.name} href={p.href}>
              <div className="bg-blue-300 py-32"> {p.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
