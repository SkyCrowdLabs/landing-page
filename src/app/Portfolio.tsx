import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

const Portfolio = () => {
  return (
    <div className="bg-white px-6 pb-24 sm:pb-32 lg:px-8">
      <div className="mx-auto max-w-xl text-center lg:max-w-6xl">
        <SectionTitle title={'Portfolio'} />
        <SectionHeader header={'Our featured work'} />
        <div className="my-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-3">
          <Link
            href={'/projects/ditoname'}
            className="mx-auto flex w-full justify-center lg:justify-end"
          >
            <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-teal-50 p-4">
              <Image
                className="h-auto w-64"
                src="/images/ditoname.webp"
                alt="dito na me logo"
                height={256}
                width={256}
              />
            </div>
          </Link>
          <Link
            href={'/projects/kodigome'}
            className="mx-auto flex w-full justify-center"
          >
            <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-red-50 p-4">
              <Image
                className="h-auto w-64"
                src="/images/kodigome.svg"
                alt="kodigo logo"
                height={256}
                width={256}
              />
            </div>
          </Link>
          <Link
            href={'/projects/vfr-planner'}
            className="mx-auto flex w-full justify-center lg:justify-start"
          >
            <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-blue-50 p-12">
              <Image
                className="h-auto w-56"
                src="/images/airplane.png"
                alt="vfr planner logo"
                height={224}
                width={224}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
