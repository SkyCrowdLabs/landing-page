interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <p className="text-base font-semibold uppercase tracking-widest text-dark-indigo">
      {title}
    </p>
  );
};

export default SectionTitle;
