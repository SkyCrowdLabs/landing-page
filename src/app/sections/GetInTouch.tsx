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
        height={320}
        width={330}
        className="absolute -left-12 -top-32 hidden scale-75 sm:block lg:scale-100"
      />
      <Image
        src="/squiggly-1.svg"
        alt="squiggly graphics"
        height={320}
        width={330}
        className="absolute -right-12 top-20 hidden -rotate-[45deg] scale-100 lg:block"
      />
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={'Start a project'} />
        <SectionHeader header={'Let’s Work Together!'} />
        <Button copy={'Get in touch'} />
      </div>
    </div>
  );
};

export default GetInTouch;
