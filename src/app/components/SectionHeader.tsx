interface SectionHeaderProps {
  header: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
  return (
    <h1 className="mt-6 text-3xl font-extrabold text-dark-indigo sm:text-5xl">
      {header}
    </h1>
  );
};

export default SectionHeader;
