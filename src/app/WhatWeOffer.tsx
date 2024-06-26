import Image from 'next/image';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';

const tiers = [
  {
    name: 'Website',
    id: 'website',
    description:
      'Add legitimacy to your brand by making a website. Put your products, services, and/or menu on the website for customers to easily discover your offerings and contact you.',
  },
  {
    name: 'Mobile App',
    id: 'mobile',
    description:
      'Own a space in your customer’s phone by making an app for your business. Make your processes mobile-friendly for your customer’s benefit.',
  },
  {
    name: 'E-commerce',
    id: 'ecommerce',
    description:
      'Set up your own shop online and get customers to buy directly through you through an e-commerce shop.',
  },
];

const WhatWeOffer = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <Image
        src="/squiggly-3.svg"
        alt="squiggly graphics"
        height={0}
        width={0}
        className="absolute -left-36 top-16 -z-10 hidden h-auto w-[330px] rotate-[160deg] -scale-x-100 lg:block"
      />
      <Image
        src="/squiggly-2.svg"
        alt="squiggly graphics"
        height={0}
        width={0}
        className="absolute -right-40 top-80 -z-10 hidden h-auto w-[330px] rotate-[190deg] -scale-x-100 sm:block"
      />
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle title={'What we offer'} />
          <SectionHeader header={'Bring your business online'} />
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-6 lg:max-w-4xl lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-indigo-600"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                    Bespoke Solutions
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Don’t see what you need here? Let’s talk and figure out your
                    needs further.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:col-span-3">
                <Button
                  copy={'Request a Call'}
                  href="https://mlawd8f2p12.typeform.com/to/bwLp4wl3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
