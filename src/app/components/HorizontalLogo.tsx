import Image from 'next/image';

const HorizontalLogo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">SkyCrowd Labs</span>
      <Image src="/skycrowd-indigo-logo.svg" alt="" height={150} width={150} />
    </a>
  );
};

export default HorizontalLogo;
