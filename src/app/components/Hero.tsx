import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-hero-pattern bg-cover">
      <Image
        src="/squiggly-4.svg"
        alt="squiggly graphics"
        height={300}
        width={280}
        className="absolute top-18 left-[calc(50%-80px)]"
      />
      <Image
        src="/squiggly-7.svg"
        alt="squiggly graphics"
        height={300}
        width={280}
        className="absolute top-1/3 -left-24 rotate-90"
      />
      <Image
        src="/squiggly-3.svg"
        alt="squiggly graphics"
        height={320}
        width={330}
        className="absolute -bottom-28 -right-16 -rotate-[150deg]"
      />
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-dark-indigo sm:text-5xl">
            Designing experiences that deliver.
          </h1>
          <p className="mt-4 text-2xl leading-8 text-dark-indigo font-medium">
            The world needs what you’re offering. Make sure they see it.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full tracking-wider bg-light-indigo px-14 py-5 text-xs text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              GET A FREE CONSULTATION <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
