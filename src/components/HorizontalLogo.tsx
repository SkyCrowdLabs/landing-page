import Image from 'next/image';

const HorizontalLogo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">SkyCrowd Labs</span>
      <Image
        src="/skycrowd-indigo-logo.svg"
        alt="Skycrowd logo"
        height={0}
        width={0}
        className="h-auto w-40"
      />
    </a>
  );
};

export default HorizontalLogo;
