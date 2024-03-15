import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Collaborative and consultative discovery process',
    icon: (
      <Image
        src="/collab.png"
        alt="collaboration graphic"
        height={120}
        width={120}
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Custom, high-quality web and app design',
    icon: (
      <Image
        src="/app.png"
        alt="app graphic"
        height={120}
        width={120}
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Long-term support for your evolving needs and goals',
    icon: (
      <Image
        src="/support.png"
        alt="support graphic"
        height={120}
        width={120}
        aria-hidden="true"
      />
    ),
  },
];

const Feature = () => {
  return (
    <div className="bg-gradient-to-br from-light-indigo from-50% to-light-purple py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-xl px-6 lg:max-w-6xl lg:px-12">
        <dl className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="my-6 lg:my-0">
              <dt>
                <div className="flex scale-75 items-center justify-center rounded-xl sm:scale-100">
                  {feature.icon}
                </div>
                <p className="text-l mt-6 px-16 text-center font-semibold leading-8 tracking-wider text-white sm:text-xl">
                  {feature.name}
                </p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Feature;
