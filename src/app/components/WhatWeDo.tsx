import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className="relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Image
        src="/squiggly-5.svg"
        alt="squiggly graphics"
        height={400}
        width={380}
        className="absolute -bottom-20 right-5"
      />
      <Image
        src="/squiggly-8.svg"
        alt="squiggly graphics"
        height={420}
        width={400}
        className="absolute -bottom-32 rotate-[-20deg]"
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-base font-semibold uppercase tracking-widest text-dark-indigo">
          What we do
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-dark-indigo sm:text-6xl lg:mx-4">
          We help businesses build a robust digital presence.
        </h2>
        <p className="mt-6 text-lg font-medium leading-8 text-light-indigo">
          We offer consultations, e-commerce development, front-end and back-end
          web design and development, app development, and maintenance and
          support services. We’ll take care of all the technicalities, so you
          can focus on building your business.
        </p>
        <form className="mt-12 flex w-full justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 lg:col-span-5 lg:pt-2">
            <label htmlFor="email-address" className="sr-only">
              What&apos;s your email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative z-10 min-w-0 flex-auto rounded-full border-0 py-4 pl-8 pr-0 uppercase tracking-wider text-light-indigo shadow-sm ring-1 ring-inset ring-light-indigo placeholder:text-xs placeholder:text-light-indigo focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:-mr-10 sm:py-2 sm:pl-12 sm:pr-40 sm:text-sm sm:leading-6"
              placeholder="What's your email"
            />
            <button
              type="submit"
              className="z-20 flex rounded-full bg-light-indigo px-8 py-5 text-xs uppercase tracking-wider text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:-ml-10"
            >
              Learn more about us{' '}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhatWeDo;
