type Props = {
  text: string;
  as: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export default function Title({ text, as, className }: Props) {
  const handleTitle = () => {
    switch (as) {
      case "h1":
        return (
          <h1
            className={`font-bold text-[40px] leading-10 tracking-[-1.13636px] lg:text-[88px] lg:leading-[88px] ${className}`}
          >
            {text}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`font-bold text-[40px] leading-10 tracking-[-1.13636px] lg:text-[88px] lg:leading-[88px] ${className}`}
          >
            {text}
          </h2>
        );
      case "h3":
        return (
          <h3 className=" font-bold text-[24px] leading-10 tracking-[-1.13636px] md:flex md:flex-col md:gap-2">
            {text}
          </h3>
        );
      case "h4":
        return <h4 className="font-bold text-[24px] leading-8">{text}</h4>;
    }
  };

  return handleTitle();
}
