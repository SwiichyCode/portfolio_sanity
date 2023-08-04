type Props = {
  text: string;
  className?: string;
};

export default function Paragraphe({ text, className }: Props) {
  return (
    <p
      className={`font-medium text-base leading-6 text-[#D9D9D9] md:text-lg md:leading-7 ${className}`}
    >
      {text}
    </p>
  );
}
