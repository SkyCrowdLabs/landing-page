interface ButtonProps {
  copy: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ copy, href = '#' }) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-x-6">
      <a
        href={href}
        className="rounded-full bg-light-indigo px-14 py-5 text-xs uppercase tracking-wider text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {`${copy} →`}
      </a>
    </div>
  );
};

export default Button;
