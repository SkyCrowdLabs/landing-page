import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const GetInTouch = () => {
  return (
    <div className="relative bg-white bg-hero-pattern bg-cover bg-right-bottom px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="/squiggly-7.svg"
        alt="squiggly graphics"
        height={0}
        width={0}
        className="absolute -left-12 -top-32 hidden h-auto w-[330px] scale-75  sm:block lg:scale-100"
      />
      <Image
        src="/squiggly-1.svg"
        alt="squiggly graphics"
        height={0}
        width={0}
        className="absolute -right-12 top-20 hidden h-auto w-[330px] -rotate-[45deg] scale-100 lg:block"
      />
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={'Start a project'} />
        <SectionHeader header={'Let’s Work Together!'} />
        <Button
          copy={'Get in touch'}
          href="https://calendly.com/skycrowd/inquire"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
