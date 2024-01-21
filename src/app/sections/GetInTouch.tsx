import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const GetInTouch = () => {
  return (
    <div className="bg-white bg-hero-pattern bg-cover px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={'Start a project'} />
        <SectionHeader header={'Let’s Work Together!'} />
        <Button copy={'Get in touch'} />
      </div>
    </div>
  );
};

export default GetInTouch;
