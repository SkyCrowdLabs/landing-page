import Image from 'next/image';
import EmailInput from '../components/EmailInput';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';

const WhatWeDo = () => {
  return (
    <div className="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="/squiggly-5.svg"
        alt="squiggly graphics"
        height={400}
        width={380}
        className="absolute -bottom-20 right-5 z-20 hidden scale-75 sm:block lg:scale-100"
      />
      <Image
        src="/squiggly-8.svg"
        alt="squiggly graphics"
        height={420}
        width={400}
        className="absolute -bottom-32 -left-20 z-20 hidden rotate-[-20deg] lg:block"
      />
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={'What we do'} />
        <SectionHeader
          header={'We help businesses build a robust digital presence.'}
        />
        <p className="mt-6 text-lg font-medium leading-8 text-light-indigo">
          We offer consultations, e-commerce development, front-end and back-end
          web design and development, app development, and maintenance and
          support services. We’ll take care of all the technicalities, so you
          can focus on building your business.
        </p>
        <div className="mt-12 flex w-full flex-row justify-center">
          <EmailInput
            placeholder={"WHAT'S YOUR EMAIL"}
            copy={'Learn more about us'}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
