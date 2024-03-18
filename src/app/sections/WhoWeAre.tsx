import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

const WhoWeAre = () => {
  return (
    <div className="bg-white bg-hero-pattern bg-cover bg-right-bottom px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-10 flex w-full flex-row justify-center">
          <Image
            src="/cloud-logo.svg"
            alt="cloud logo"
            height={70}
            width={120}
          />
        </div>
        <SectionTitle title={'Who we are'} />
        <p className="mt-6 text-lg font-medium leading-8 text-dark-indigo">
          We’re a small team of experienced developers and engineers with
          collective 5 years of experience in web, mobile, and product
          development. Our idea of fun is helping innovative and enterprising
          businesses like yours distinguish themselves in the vast online world.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
