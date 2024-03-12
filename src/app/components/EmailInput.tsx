interface EmailInputProps {
  placeholder: string;
  copy: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder, copy }) => {
  return (
    <form className="flex justify-start">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 lg:col-span-5 lg:pt-2">
        <label htmlFor="email-address" className="sr-only">
          {placeholder}
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative z-10 min-w-0 flex-auto rounded-full border-0 py-4 pl-8 pr-0 uppercase tracking-wider text-light-indigo shadow-sm ring-1 ring-inset ring-light-indigo placeholder:text-xs placeholder:text-light-indigo focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:-mr-10 sm:py-2 sm:pl-12 sm:pr-40 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="z-20 flex min-w-32 rounded-full bg-light-indigo px-8 py-5 text-xs uppercase tracking-wider text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:-ml-10"
        >
          {`${copy} →`}
        </button>
      </div>
    </form>
  );
};

export default EmailInput;
