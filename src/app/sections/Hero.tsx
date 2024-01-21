import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const Hero = () => {
  return (
    <div className="relative isolate bg-hero-pattern bg-cover px-6 pt-14 lg:px-8">
      <Image
        src="/squiggly-4.svg"
        alt="squiggly graphics"
        height={300}
        width={280}
        className="top-18 absolute left-[calc(50%-80px)] -z-20"
      />
      <Image
        src="/squiggly-7.svg"
        alt="squiggly graphics"
        height={300}
        width={280}
        className="absolute -left-24 top-1/3 -z-20 rotate-90"
      />
      <Image
        src="/squiggly-3.svg"
        alt="squiggly graphics"
        height={320}
        width={330}
        className="absolute -bottom-28 -right-16 -z-20 -rotate-[150deg]"
      />
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <SectionHeader header={'Designing experiences that deliver.'} />
          <p className="mt-4 text-2xl font-medium leading-8 text-dark-indigo">
            The world needs what you’re offering. Make sure they see it.
          </p>
          <Button copy={'GET A FREE CONSULTATION'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
