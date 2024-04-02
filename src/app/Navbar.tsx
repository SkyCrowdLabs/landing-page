import HorizontalLogo from '../components/HorizontalLogo';

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-dark-indigo from-10% via-mid-indigo via-60% to-light-indigo to-90%">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <HorizontalLogo />
        </div>
        <div className="hidden tracking-wide md:flex md:flex-1 md:justify-end">
          Bespoke web development services
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
