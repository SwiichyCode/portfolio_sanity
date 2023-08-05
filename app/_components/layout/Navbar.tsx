import Link from "next/link";
import Logo from "../common/Logo";
import { nav_mock } from "@/app/_mocks";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col justify-center items-center gap-[20px] pt-[20px] pr-[29px] pl-[30px] mb-[40px] md:flex-row md:justify-between md:pt-[29px] md:pr-0 md:pl-0 md:mb-[70px]">
      <Logo />
      <ul className="flex items-center gap-[24px]">
        {nav_mock.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[24px] ease-in-out duration-200 hover:text-primary-green"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
