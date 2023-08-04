import Link from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  as: "button" | "a";
  href?: string;
}

export default function Button({ text, as, href, ...props }: Props) {
  const className =
    "w-fit font-bold text-base leading-6 tracking-[2.28571px] uppercase border-b-2 border-solid border-[#4EE1A0] pb-2 ease-in-out duration-200 hover:text-primary-green";

  return as === "button" ? (
    <button className={className} {...props}>
      {text}
    </button>
  ) : (
    <Link href={href as string} className={className} target="_blank">
      {text}
    </Link>
  );
}
