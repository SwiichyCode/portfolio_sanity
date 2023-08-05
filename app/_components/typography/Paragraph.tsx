type Props = {
  text: string;
  className?: string;
};

export default function Paragraph({ text, className }: Props) {
  return (
    <p
      className={`font-medium text-base leading-6 text-primary-grey md:text-lg md:leading-7 ${className}`}
    >
      {text}
    </p>
  );
}
