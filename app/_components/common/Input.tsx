interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: Props) {
  return (
    <div>
      <input
        className="w-full bg-transparent pb-4 pl-6 text-base leading-6 uppercase placeholder:font-medium placeholder:text-base placeholder:leading-6 placeholder:text-primary-grey placeholder:tracking-[-0.222222px] focus:outline-none "
        {...props}
      />
      <div className="w-full h-[1px] bg-primary-grey"></div>
    </div>
  );
}
