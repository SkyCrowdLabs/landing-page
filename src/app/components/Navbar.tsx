import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-dark-indigo from-10% via-mid-indigo via-60% to-light-indigo to-90%">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">SkyCrowd Labs</span>
            <Image
              src="/skycrowd-indigo-logo.svg"
              alt=""
              height={150}
              width={150}
            />
          </a>
        </div>
        <div className="hidden tracking-wide md:flex md:flex-1 md:justify-end">
          Bespoke web development services
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
